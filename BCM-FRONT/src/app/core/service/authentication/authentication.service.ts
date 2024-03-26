import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, map, Observable, of, tap, throwError} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {UserAuthInterface} from "../../model/UserAuthInterface";
import {AuthResponseInterface} from "../../model/AuthResponseInterface";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private url: string = "http://localhost:8888/api/v1/auth/";
  private _user: UserAuthInterface | null = null;

  constructor(
    private router: Router,
    private toast: ToastrService,
    private http: HttpClient
  ) {
  }

  set user(user: UserAuthInterface | null) {
    this._user = user;
  }

  get user(): Observable<UserAuthInterface> {
    if (!this._user) {
      let userObservable = this.profile();
      userObservable.subscribe(
        (user) => this.user = user
      );
      return userObservable;
    }

    return of(this._user);
  }

  login(username: string, password: string): Observable<AuthResponseInterface> {
    return this.http.post<AuthResponseInterface>(this.url + 'login', {email:username, password:password});
  }

  register(firstName: string, lastName: string, email: string, password: string,telephone:string, cityId:string): Observable<AuthResponseInterface> {
    return this.http.post<AuthResponseInterface>(this.url + 'register', {firstName, lastName, email, password,telephone, cityId});
  }

  profile(): Observable<UserAuthInterface> {
    return this.http.get<UserAuthInterface>(this.url + 'info');
  }

  isAuthenticate(): Observable<boolean> {
    let token = localStorage.getItem("access-token");
    let expiration = localStorage.getItem("token-expiration");

    if (token && expiration) {
      const expirationDate = new Date(expiration);
      const now = new Date();

      if (expirationDate >= now) {
        return of(true);
      }

      return this.user
        .pipe(
          map(() => true)
        );
    }
    this.toast.error("You are not authenticated")

    this.router.navigate(['/login']);

    return of(false);
  }

  hasRightAuthority(authority: string): Observable<boolean> {
    return this.user.pipe(
      map(user => user.permissions.length > 0 && user.permissions.includes(authority)),
      tap((value) => {
          if (!value) {
            this.toast.error("You don't have the right authority");
          }
        }
      )
    );
  }

  logout(): Observable<any> {
    let observable = this.http.post(this.url + 'logout', null);

    return observable.pipe(
      tap(() => {
        this.clearToken();
        this.router.navigate(['/login']);
      })
    );
  }

  refreshToken(): Observable<AuthResponseInterface> {
    let refreshToken = localStorage.getItem("refresh-token");
    return this.http.post<AuthResponseInterface>(this.url + 'refresh-token', {refreshToken}).pipe(
      tap((response) => {
        localStorage.setItem("access-token", response["access-token"]);
        localStorage.setItem("token-expiration", response["token-expiration"]);
      }),
      catchError((error: HttpErrorResponse) => {
        this.clearToken();
        return throwError(() => new Error("No or Invalid refresh token"));
      })
    );
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post(this.url + 'forgot-password', {}, {params: {email}});
  }

  resetPassword(token: string, password: string): Observable<any> {
    return this.http.post(this.url + 'reset-password', {}, {params: {token, password}});
  }

  clearToken() {
    localStorage.removeItem("access-token");
    localStorage.removeItem("token-expiration");
    localStorage.removeItem("refresh-token");

    this.user = null;
  }
}

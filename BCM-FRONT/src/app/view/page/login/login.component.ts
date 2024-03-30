import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {UserActions} from "../../../core/state/user/user.actions";
import {selectUserError, selectUserInfo, selectUserKeys} from "../../../core/state/user/user.selectors";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hide = true;
  username: string = "";
  password: string = "";
  keys = this.store.select(selectUserKeys);
  error$ = this.store.select(selectUserError);
  user$ = this.store.select(selectUserInfo);
  constructor(
    private store: Store,
    private route: Router,
    private toast: ToastrService,
  ) {
  }
  login() {
    this.store.dispatch(UserActions.login({username: this.username, password: this.password}));
    this.keys.subscribe(
      (value) => {
        if (value.accessToken !== "" && value.tokenExpiration !== "" && value.refreshToken !== ""){
          localStorage.setItem("access-token", value.accessToken);
          localStorage.setItem("token-expiration", value.tokenExpiration)
          localStorage.setItem("refresh-token", value.refreshToken);

          this.store.dispatch(UserActions.userInfo());

          this.user$.subscribe(
            user => {
              if (user.role !== '') {
                if (user.role === "MANAGER") {
                  this.route.navigate(['/dashboard']);
                } else {
                  this.route.navigate(['/home']);
                }
              }
            }
          )
        }
      }
    );
    this.error$.subscribe(
      error => {
        if (error !== '') {
          this.toast.error(error);
        }
      }
    );
  }
}

import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {CityResponseDto} from "../../../core/model/CityResponseDto";
import {Store} from "@ngrx/store";
import {CityActions} from "../../../core/state/city/city.actions";
import {selectCities} from "../../../core/state/city/city.selectors";
import {UserActions} from "../../../core/state/user/user.actions";
import {selectUserError, selectUserKeys} from "../../../core/state/user/user.selectors";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  cities$!: Observable<CityResponseDto[]>;
  hide = true;
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  password: string = "";
  cityId: number = 0;
  telephone: string = "";
  keys = this.store.select(selectUserKeys);
    error$ = this.store.select(selectUserError);

  constructor(private store: Store,private route: Router, private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.store.dispatch(CityActions.loadAllCities());
    this.cities$ = this.store.select(selectCities);
  }

  register() {
    this.store.dispatch(UserActions.register({firstName: this.firstName, lastName: this.lastName, email: this.email, password: this.password, cityId: this.cityId, telephone: this.telephone}));
    this.keys.subscribe(
        (value) => {
          if (value.accessToken !== "" && value.tokenExpiration !== "" && value.refreshToken !== ""){
            localStorage.setItem("access-token", value.accessToken);
            localStorage.setItem("token-expiration", value.tokenExpiration)
            localStorage.setItem("refresh-token", value.refreshToken);

            this.route.navigate(['/home']);
            }
        }
        );

    this.error$.subscribe(
        error => {
            if (error !== null) {
              console.log(error);
            }
        }
        );

  }
}

import {Component, OnInit} from '@angular/core';
import {UserAuthInterface} from "../../../core/model/UserAuthInterface";
import {Observable} from "rxjs";
import {AuthenticationService} from "../../../core/service/authentication/authentication.service";
import {Store} from "@ngrx/store";
import {selectUserInfo} from "../../../core/state/user/user.selectors";
import {UserActions} from "../../../core/state/user/user.actions";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  user: Observable<UserAuthInterface> = this.store.select(selectUserInfo);

  constructor(
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(UserActions.userInfo());
  }

  logOut() {
    this.store.dispatch(UserActions.logout());
  }

}

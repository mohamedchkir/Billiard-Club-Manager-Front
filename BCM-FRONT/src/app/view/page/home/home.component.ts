import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {UserAuthInterface} from "../../../core/model/UserAuthInterface";
import {selectUserInfo} from "../../../core/state/user/user.selectors";
import {Store} from "@ngrx/store";
import {UserActions} from "../../../core/state/user/user.actions";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  user: Observable<UserAuthInterface> = this.store.select(selectUserInfo);

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(UserActions.userInfo());

  }


}

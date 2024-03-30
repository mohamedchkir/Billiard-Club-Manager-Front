import { Component } from '@angular/core';
import {UserActions} from "../../../core/state/user/user.actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private store: Store) {
  }

  logOut() {
    this.store.dispatch(UserActions.logout());
  }

}

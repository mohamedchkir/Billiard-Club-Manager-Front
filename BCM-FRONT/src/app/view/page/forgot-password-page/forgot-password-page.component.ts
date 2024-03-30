import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {ToastrService} from "ngx-toastr";
import {selectUserError} from "../../../core/state/user/user.selectors";
import {UserActions} from "../../../core/state/user/user.actions";

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrl: './forgot-password-page.component.css'
})
export class ForgotPasswordPageComponent {
  email: string = '';
  error$ = this.store.select(selectUserError);

  constructor(
    private store: Store,
    private toastr: ToastrService
  ) {
  }

  forgotPassword() {
    this.store.dispatch(UserActions.forgotPassword({email: this.email}));

    this.error$.subscribe(error => {
      if (error) {
        this.toastr.error(error);
      } else {
        this.toastr.success('Password reset email sent');
      }
    });
  }
}

import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {selectUserError} from "../../../core/state/user/user.selectors";
import {UserActions} from "../../../core/state/user/user.actions";

@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrl: './reset-password-page.component.css'
})
export class ResetPasswordPageComponent {
  token: string = '';
  password: string = '';
  confirmPassword: string = '';
  error$ = this.store.select(selectUserError);
  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const token = params['token'];
      if (!token) {
        this.router.navigate(['/404']);
      }
      this.token = token;
    });
  }

  resetPassword() {
    if (this.password == '' || this.password !== this.confirmPassword) {
      this.toastr.error('Password and confirm password do not match');
      return;
    }

    this.store.dispatch(UserActions.resetPassword({password: this.password, token: this.token}));

    this.error$.subscribe(error => {
      if (error) {
        this.toastr.error(error);
      } else {
        this.toastr.success('Password reset successfully');
        this.router.navigate(['/login']);
      }
    });
  }
}

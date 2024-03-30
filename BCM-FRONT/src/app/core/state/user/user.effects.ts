import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { UserActions } from './user.actions';
import {AuthenticationService} from "../../service/authentication/authentication.service";


@Injectable()
export class UserEffects {

 login$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.login),
    concatMap(action =>
      this.authService.login(action.username, action.password).pipe(
        map(response => UserActions.loginSuccess(response)),
        catchError(error => of(UserActions.loginFailure({ error: error.error.message })))
      )
    )
  ));

 register$ = createEffect(() => this.actions$.pipe(
   ofType(UserActions.register),
   concatMap(action =>
     this.authService.register(action.firstName,action.lastName,action.email, action.password,action.telephone,action.cityId).pipe(
       map(response => UserActions.registerSuccess(response)),
       catchError(error => of(UserActions.registerFailure({ error: error.error.message })))
     )
   )
 ));

  userInfo$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.userInfo),
    concatMap(() =>
      this.authService.profile().pipe(
        map(user => UserActions.userInfoSuccess(user)),
        catchError(error => of(UserActions.userInfoFailure({ error: error.error.message })))
      )
    )
  ));

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.logout),
    concatMap(() =>
      this.authService.logout().pipe(
        map(() => UserActions.logoutSuccess()),
        catchError(error => of(UserActions.logoutFailure({ error: error.error.message })))
      )
    )
  ));

  forgotPassword$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.forgotPassword),
    concatMap(action =>
      this.authService.forgotPassword(action.email).pipe(
        map(() => UserActions.forgotPasswordSuccess()),
        catchError(error => of(UserActions.forgotPasswordFailure({ error: error.error.message })))
      )
    )
  ));

  resetPassword$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.resetPassword),
    concatMap(action =>
      this.authService.resetPassword(action.password, action.token).pipe(
        map(() => UserActions.resetPasswordSuccess()),
        catchError(error => of(UserActions.resetPasswordFailure({ error: error.error.message })))
      )
    )
  ));

  constructor(private actions$: Actions,
              private authService: AuthenticationService) {}
}

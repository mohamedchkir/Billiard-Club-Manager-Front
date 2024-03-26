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
        catchError(error => of(UserActions.loginFailure({ error })))
      )
    )
  ));

 register$ = createEffect(() => this.actions$.pipe(
   ofType(UserActions.register),
   concatMap(action =>
     this.authService.register(action.firstName,action.lastName,action.email, action.password,action.telephone,action.cityId).pipe(
       map(response => UserActions.registerSuccess(response)),
       catchError(error => of(UserActions.registerFailure({ error })))
     )
   )
 ));

  userInfo$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.userInfo),
    concatMap(() =>
      this.authService.profile().pipe(
        map(user => UserActions.userInfoSuccess(user)),
        catchError(error => of(UserActions.userInfoFailure({ error })))
      )
    )
  ));

  constructor(private actions$: Actions,
              private authService: AuthenticationService) {}
}

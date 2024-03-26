import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {AuthResponseInterface} from "../../model/AuthResponseInterface";
import {UserAuthInterface} from "../../model/UserAuthInterface";

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    login: props<{ username: string, password: string }>(),
    loginSuccess: props<AuthResponseInterface>(),
    loginFailure: props<{ error: string }>(),
    logout: emptyProps(),
    logoutSuccess: emptyProps(),
    logoutFailure: props<{ error: string }>(),
    refreshToken: props<{ refreshToken: string }>(),
    refreshTokenSuccess: props<{ accessToken: string, tokenExpiration: string, refreshToken: string }>(),
    refreshTokenFailure: props<{ error: string }>(),
    register: props<{firstName:string,lastName:string,email:string,password:string,telephone:string,cityId:string}>(),
    registerSuccess:props<AuthResponseInterface>(),
    registerFailure:props<{ error: string }>(),
    userInfo:emptyProps,
    userInfoSuccess:props<UserAuthInterface>(),
    userInfoFailure:props<{ error: string }>(),
  }
});

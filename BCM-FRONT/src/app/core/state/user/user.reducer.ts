import { createFeature, createReducer, on } from '@ngrx/store';
import { UserActions } from './user.actions';
import {UserAuthInterface} from "../../model/UserAuthInterface";
import {state} from "@angular/animations";

export const userFeatureKey = 'user';

export interface State {
  accessToken: string;
  tokenExpiration: string;
  refreshToken: string;
  error: string;
  user :UserAuthInterface;

}

export const initialState: State = {
  accessToken: "",
  tokenExpiration: "",
  refreshToken: "",
  error: "",
  user: {
    id: 0,
    email: "",
    role: "",
    password: "",
    city: "",
    imageUrl: "",
    numberOfTokens: 0,
    permissions: [],
    firstName: "",
    lastName: ""
  }

};

export const reducer = createReducer(
  initialState,
  on(UserActions.loginSuccess, (state, AuthResponse) => ({...state, accessToken:AuthResponse["access-token"], tokenExpiration:AuthResponse["token-expiration"], refreshToken:AuthResponse["refresh-token"], error: ""})),
  on(UserActions.loginFailure, (state, {error}) => ({...state, error})),
  on(UserActions.logoutSuccess, (state) => initialState),
  on(UserActions.logoutFailure, (state, {error}) => ({...state, error})),
  on(UserActions.refreshTokenSuccess, (state, {accessToken, tokenExpiration, refreshToken}) => ({...state, accessToken, tokenExpiration, refreshToken, error: ""})),
  on(UserActions.refreshTokenFailure, (state, {error}) => ({...state, error})),
  on(UserActions.refreshToken, (state, {refreshToken}) => ({...state, refreshToken, error: ""})),
  on(UserActions.registerSuccess, (state, AuthResponse) => ({...state, accessToken:AuthResponse["access-token"], tokenExpiration:AuthResponse["token-expiration"], refreshToken:AuthResponse["refresh-token"], error: ""})),
  on(UserActions.registerFailure, (state, {error}) => ({...state, error})),
  on(UserActions.userInfoSuccess, (state, user) => ({...state, user, error: ""})),
  on(UserActions.userInfoFailure, (state, {error}) => ({...state, error})),
  on(UserActions.forgotPasswordSuccess, (state) => ({...state, error: ""})),
  on(UserActions.forgotPasswordFailure, (state, {error}) => ({...state, error})),
  on(UserActions.resetPasswordSuccess, (state) => ({...state, error: ""})),
  on(UserActions.resetPasswordFailure, (state, {error}) => ({...state, error})),

);

export const userFeature = createFeature({
  name: userFeatureKey,
  reducer,
});


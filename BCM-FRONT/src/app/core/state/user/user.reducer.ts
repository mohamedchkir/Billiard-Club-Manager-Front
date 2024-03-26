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
  on(UserActions.loginSuccess, (state, {accessToken, tokenExpiration, refreshToken}) => ({...state, accessToken, tokenExpiration, refreshToken})),
  on(UserActions.loginFailure, (state, {error}) => ({...state, error})),
  on(UserActions.logoutSuccess, (state) => ({...state})),
  on(UserActions.logoutFailure, (state, {error}) => ({...state, error})),
  on(UserActions.refreshTokenSuccess, (state, {accessToken, tokenExpiration, refreshToken}) => ({...state, accessToken, tokenExpiration, refreshToken})),
  on(UserActions.refreshTokenFailure, (state, {error}) => ({...state, error})),
  on(UserActions.refreshToken, (state, {refreshToken}) => ({...state, refreshToken})),
  on(UserActions.registerSuccess, (state, {accessToken, tokenExpiration, refreshToken}) => ({...state, accessToken, tokenExpiration, refreshToken})),
  on(UserActions.registerFailure, (state, {error}) => ({...state, error})),
  on(UserActions.userInfoSuccess, (state, user) => ({...state, user})),
  on(UserActions.userInfoFailure, (state, {error}) => ({...state, error})),



);

export const userFeature = createFeature({
  name: userFeatureKey,
  reducer,
});


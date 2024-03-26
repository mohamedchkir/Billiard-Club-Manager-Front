import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from './user.reducer';

export const selectUserState = createFeatureSelector<fromUser.State>(
  fromUser.userFeatureKey
);

export const selectUserKeys = createSelector(
  selectUserState,
  (state) => {
    return {
      accessToken: state.accessToken,
      tokenExpiration: state.tokenExpiration,
      refreshToken: state.refreshToken,
    };
  }
);

export const selectUserError = createSelector(
  selectUserState,
  (state) => state.error
);

export const selectUserInfo = createSelector(
  selectUserState,
  (state) => state.user
);



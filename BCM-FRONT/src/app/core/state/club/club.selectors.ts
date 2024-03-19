import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromClub from './club.reducer';

export const selectClubState = createFeatureSelector<fromClub.State>(
  fromClub.clubFeatureKey
);

export const selectClubs = createSelector(
  selectClubState,
  (state) => state.clubs
);

export const selectError = createSelector(
  selectClubState,
  (state) => state.error
);

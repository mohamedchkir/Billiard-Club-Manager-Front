import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromClub from './club.reducer';

export const selectClubState = createFeatureSelector<fromClub.State>(
  fromClub.clubFeatureKey
);

export const selectClubPageable = createSelector(
  selectClubState,
  (state) => state.pageable
);

export const selectClubs = createSelector(
  selectClubState,
  (state) => state.pageable.content
);

export const selectClubError = createSelector(
  selectClubState,
  (state) => state.error
);

export const selectClubById = (id: number) =>
  createSelector(selectClubs, (clubs) => clubs.find((club) => club.id === id));

export const selectClubPage = createSelector(
  selectClubPageable,
  (pageable) => pageable.number
);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPlayer from './player.reducer';

export const selectPlayerState = createFeatureSelector<fromPlayer.State>(
  fromPlayer.playerFeatureKey
);

export const selectPlayers = createSelector(
  selectPlayerState,
  (state) => state.players
);

export const selectError = createSelector(
  selectPlayerState,
  (state) => state.error
);

export const selectClient = createSelector(
  selectPlayerState,
  (state) => state.players.filter(player => player.role.includes('CLIENT'))
);

export const selectManager = createSelector(
  selectPlayerState,
  (state) => state.players.filter(player => player.role.includes('MANAGER'))
);






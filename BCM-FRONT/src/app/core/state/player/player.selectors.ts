import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPlayer from './player.reducer';

export const selectPlayerState = createFeatureSelector<fromPlayer.State>(
  fromPlayer.playerFeatureKey
);

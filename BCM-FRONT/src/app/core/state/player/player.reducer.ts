import { createFeature, createReducer, on } from '@ngrx/store';
import { PlayerActions } from './player.actions';

export const playerFeatureKey = 'player';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
  on(PlayerActions.loadPlayers, state => state),
  on(PlayerActions.loadPlayersSuccess, (state, action) => state),
  on(PlayerActions.loadPlayersFailure, (state, action) => state),
);

export const playerFeature = createFeature({
  name: playerFeatureKey,
  reducer,
});


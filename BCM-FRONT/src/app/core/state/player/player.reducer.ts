import { createFeature, createReducer, on } from '@ngrx/store';
import { PlayerActions } from './player.actions';
import {UserSimpleResponseDto} from "../../model/UserSimpleResponseDto";
import {SimpleErrorResponse} from "../../model/SimpleErrorResponse";

export const playerFeatureKey = 'player';

export interface State {
  players: UserSimpleResponseDto[];
  error: SimpleErrorResponse | null;

}

export const initialState: State = {
  players: [],
  error: null

};

export const reducer = createReducer(
  initialState,
  on(PlayerActions.loadAllPlayers, (state) => ({...state, players: [], error: null})),
  on(PlayerActions.loadAllPlayersSuccess, (state, {players}) => ({...state, players})),
  on(PlayerActions.loadAllPlayersFailure, (state, {error}) => ({...state, error})),
  on(PlayerActions.deletePlayerSuccess, (state, {id}) => ({
    ...state,
    players: state.players.filter(player => player.id !== id)
  })),
  on(PlayerActions.deletePlayerFailure, (state, {error}) => ({...state, error})),
  on(PlayerActions.deletePlayer, (state) => state),
);

export const playerFeature = createFeature({
  name: playerFeatureKey,
  reducer,
});


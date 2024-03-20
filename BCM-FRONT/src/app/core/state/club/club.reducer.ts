import { createFeature, createReducer, on } from '@ngrx/store';
import { ClubActions } from './club.actions';
import {ClubResponseDto} from "../../model/ClubResponseDto";
import {SimpleErrorResponse} from "../../model/SimpleErrorResponse";

export const clubFeatureKey = 'club';

export interface State {
  clubs: ClubResponseDto[]; // Define your state shape here
  error: SimpleErrorResponse | null;
}

export const initialState: State = {
  clubs: [],
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(ClubActions.loadAllClubsSuccess, (state, { clubs }) => ({ ...state, clubs })),
  on(ClubActions.loadAllClubsFailure, (state, { error }) => ({ ...state, error })),
  on(ClubActions.loadAllClubs, (state) => ({ ...state, clubs: [], error: null }))
);

export const clubFeature = createFeature({
  name: clubFeatureKey,
  reducer,
});


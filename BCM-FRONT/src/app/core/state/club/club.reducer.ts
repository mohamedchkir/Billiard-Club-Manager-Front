import { createFeature, createReducer, on } from '@ngrx/store';
import { ClubActions } from './club.actions';
import {ClubResponseDto} from "../../model/ClubResponseDto";
import {SimpleErrorResponse} from "../../model/SimpleErrorResponse";
import {ClubPageableResponse} from "../../model/ClubPageableResponse";

export const clubFeatureKey = 'club';

export interface State {
  pageable: ClubPageableResponse;
  error: SimpleErrorResponse | null;
}

export const initialState: State = {
  pageable: {
    content: [],
    totalPages: 0,
    totalElements: 0,
    last: false,
    size: 0,
    number: 0,
    first: false,
    numberOfElements: 0,
    empty: false
  },
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(ClubActions.loadAllClubsSuccess, (state, { clubs }) => ({
    ...state,
    pageable: clubs
  })),
  on(ClubActions.loadAllClubsFailure, (state, { error }) => ({
    ...state,
    error: error
  })),
  on(ClubActions.loadAllClubs, (state) => state)
);

export const clubFeature = createFeature({
  name: clubFeatureKey,
  reducer,
});


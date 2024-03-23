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
  on(ClubActions.loadAllClubs, (state) => state),

  on(ClubActions.deleteClubSuccess, (state, { id }) => ({
    ...state,
    pageable: {
      ...state.pageable,
      content: state.pageable.content.filter(club => club.id !== id)

    }
  })),
  on(ClubActions.deleteClubFailure, (state, { error }) => ({
    ...state,
    error: error
  })),
  on(ClubActions.deleteClub, (state) => state),

  on(ClubActions.addClubSuccess, (state, { club }) => ({
    ...state,
    pageable: {
      ...state.pageable,
      content: [...state.pageable.content, club]
    }
  })),
  on(ClubActions.addClubFailure, (state, { error }) => ({
    ...state,
    error: error
  })),
  on(ClubActions.addClub, (state) => state),
);




export const clubFeature = createFeature({
  name: clubFeatureKey,
  reducer,
});


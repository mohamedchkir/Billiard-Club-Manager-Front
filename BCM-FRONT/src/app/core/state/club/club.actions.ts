import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {ClubResponseDto} from "../../model/ClubResponseDto";
import {SimpleErrorResponse} from "../../model/SimpleErrorResponse";

export const ClubActions = createActionGroup({
  source: 'Club',
  events: {
    loadAllClubs: emptyProps(),
    loadAllClubsSuccess: props<{ clubs: ClubResponseDto[] }>(),
    loadAllClubsFailure: props<{ error: SimpleErrorResponse }>()
  }
});

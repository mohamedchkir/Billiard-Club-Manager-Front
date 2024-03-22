import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {ClubResponseDto} from "../../model/ClubResponseDto";
import {SimpleErrorResponse} from "../../model/SimpleErrorResponse";
import {ClubPageableResponse} from "../../model/ClubPageableResponse";

export const ClubActions = createActionGroup({
  source: 'Club',
  events: {
    loadAllClubs: props<{ page: number, size: number }>(),
    loadAllClubsSuccess: props<{ clubs: ClubPageableResponse }>(),
    loadAllClubsFailure: props<{ error: SimpleErrorResponse }>(),
    searchClubs: props<{ name: string, cityId: string, page: number, size: number }>(),
    deleteClub: props<{ id: number }>(),
  }
});

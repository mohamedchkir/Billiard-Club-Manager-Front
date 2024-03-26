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
    deleteClubSuccess: props<{id: number}>(),
    deleteClubFailure: props<{ error: SimpleErrorResponse }>(),
    addClub: props<{ formData: FormData }>(),
    addClubSuccess: props<{ club: ClubResponseDto }>(),
    addClubFailure: props<{ error: SimpleErrorResponse }>(),
    loadClubById: props<{ id: number }>(),
    loadClubByIdSuccess: props<{ club: ClubResponseDto }>(),
    loadClubByIdFailure: props<{ error: SimpleErrorResponse }>(),
    updateClub: props<{ id: number, formData: FormData }>(),
    updateClubSuccess: props<{ club: ClubResponseDto }>(),
    updateClubFailure: props<{ error: SimpleErrorResponse }>(),

  }
});

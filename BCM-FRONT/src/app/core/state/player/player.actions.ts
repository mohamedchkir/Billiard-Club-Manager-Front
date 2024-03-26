import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {UserSimpleResponseDto} from "../../model/UserSimpleResponseDto";
import {SimpleErrorResponse} from "../../model/SimpleErrorResponse";

export const PlayerActions = createActionGroup({
  source: 'Player',
  events: {
    LoadAllPlayers: emptyProps(),
    LoadAllPlayersSuccess: props<{ players: UserSimpleResponseDto[] }>(),
    LoadAllPlayersFailure: props<{ error: SimpleErrorResponse }>(),
    DeletePlayer: props<{ id: number }>(),
    DeletePlayerSuccess: props<{ id: number }>(),
    DeletePlayerFailure: props<{ error: SimpleErrorResponse }>(),
    ChangeRole: props<{ id: number }>(),
    ChangeRoleSuccess: props<{ id: number }>(),
    ChangeRoleFailure: props<{ error: SimpleErrorResponse }>(),
    SearchPlayers: props<{ firstNameOrLast: string,cityId: string }>(),
    SearchPlayersSuccess: props<{ players: UserSimpleResponseDto[] }>(),
    SearchPlayersFailure: props<{ error: SimpleErrorResponse }>(),


  }
});

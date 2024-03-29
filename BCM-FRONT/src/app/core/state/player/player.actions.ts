import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {UserSimpleResponseDto} from "../../model/UserSimpleResponseDto";
import {SimpleErrorResponse} from "../../model/SimpleErrorResponse";

export const PlayerActions = createActionGroup({
  source: 'Player',
  events: {
    LoadAllPlayers: emptyProps(),
    LoadAllPlayersSuccess: props<{ players: UserSimpleResponseDto[] }>(),
    LoadAllPlayersFailure: props<{ error: SimpleErrorResponse }>(),
    SearchPlayers: props<{ search: string,cityId: number }>(),
    DeletePlayer: props<{ id: number }>(),
    DeletePlayerSuccess: props<{ id: number }>(),
    DeletePlayerFailure: props<{ error: SimpleErrorResponse }>(),
  }
});

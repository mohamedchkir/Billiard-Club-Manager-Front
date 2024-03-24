import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { PlayerActions } from './player.actions';
import {PlayerService} from "../../service/player/player.service";


@Injectable()
export class PlayerEffects {

  loadPlayers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PlayerActions.loadAllPlayers),
      concatMap(() =>
        this.playerService.getAllPlayers().pipe(
          map(players => PlayerActions.loadAllPlayersSuccess({ players })),
          catchError(error => of(PlayerActions.loadAllPlayersFailure({ error }))))
      )
    );
  });

  searchPlayers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PlayerActions.searchPlayers),
      concatMap((action) =>
        this.playerService.searchPlayers(action.firstNameOrLast, action.cityId).pipe(
          map(players => PlayerActions.searchPlayersSuccess({ players })),
          catchError(error => of(PlayerActions.searchPlayersFailure({ error }))))
      )
    );
  });

  deletePlayer$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PlayerActions.deletePlayer),
      concatMap((action) =>
        this.playerService.deletePlayer(action.id).pipe(
          map(() => PlayerActions.deletePlayerSuccess({ id: action.id })),
          catchError(error => of(PlayerActions.deletePlayerFailure({ error }))))
      )
    );
  });

  changeRole$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PlayerActions.changeRole),
      concatMap((action) =>
        this.playerService.changeRole(action.id).pipe(
          map(() => PlayerActions.changeRoleSuccess({ id: action.id })),
          catchError(error => of(PlayerActions.changeRoleFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions,
              private playerService: PlayerService
  ) {}
}

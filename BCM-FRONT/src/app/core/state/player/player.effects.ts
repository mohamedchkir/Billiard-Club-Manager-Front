import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { PlayerActions } from './player.actions';


@Injectable()
export class PlayerEffects {

  loadPlayers$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(PlayerActions.loadPlayers),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => PlayerActions.loadPlayersSuccess({ data })),
          catchError(error => of(PlayerActions.loadPlayersFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}

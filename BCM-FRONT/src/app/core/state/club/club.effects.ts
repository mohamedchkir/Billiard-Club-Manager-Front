import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs'; // Import your service for fetching clubs
import { ClubActions } from './club.actions';
import {ClubService} from "../../service/club/club.service";

@Injectable()
export class ClubEffects {

  loadClubs$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ClubActions.loadAllClubs), // Adjust action name to match
      concatMap(() =>
        this.clubService.getAllClubs().pipe(
          map(clubs => ClubActions.loadAllClubsSuccess({ clubs})),
          catchError(error => of(ClubActions.loadAllClubsFailure({ error }))))
      )
    );
  });

  constructor(
    private actions$: Actions,
    private clubService: ClubService
  ) {}
}

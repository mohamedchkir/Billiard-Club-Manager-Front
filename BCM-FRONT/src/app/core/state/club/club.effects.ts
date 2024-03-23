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
      concatMap((action) =>
        this.clubService.getAllClubs(action.page, action.size).pipe(
          map(clubs => ClubActions.loadAllClubsSuccess({ clubs})),
          catchError(error => of(ClubActions.loadAllClubsFailure({ error }))))
      )
    );
  });

  searchClubs$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ClubActions.searchClubs),
      concatMap((action) =>
        this.clubService.searchClubs(action.name, action.cityId, action.page, action.size).pipe(
          map(clubs => ClubActions.loadAllClubsSuccess({ clubs})),
          catchError(error => of(ClubActions.loadAllClubsFailure({ error }))))
      )
    );
  });

  deleteClub$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ClubActions.deleteClub),
      concatMap((action) =>
        this.clubService.deleteClub(action.id).pipe(
          map(() => ClubActions.deleteClubSuccess({ id: action.id })),
          catchError(error => of(ClubActions.deleteClubFailure({ error }))))
      )
    );
  });

  addClub$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ClubActions.addClub),
      concatMap((action) =>
        this.clubService.addClub(action.formData).pipe(
          map(club => ClubActions.addClubSuccess({ club })),
          catchError(error => of(ClubActions.addClubFailure({ error }))))
      )
    );
});


  constructor(
    private actions$: Actions,
    private clubService: ClubService
  ) {}
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { CityActions } from './city.actions';
import {CityService} from "../../service/city/city.service";


@Injectable()
export class CityEffects {

  loadCities$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(CityActions.loadAllCities),
      concatMap(() =>
        this.cityService.getAllCities().pipe(
          map(cities => CityActions.loadAllCitiesSuccess({ cities })),
          catchError(error => of(CityActions.loadAllCitiesFailure({ error }))))
      )
    );
  }
  );


  constructor(private actions$: Actions,
              private cityService: CityService) {}
}

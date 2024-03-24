import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { ServiceActions } from './service.actions';
import {ServiceService} from "../../service/service/service.service";


@Injectable()
export class ServiceEffects {

  loadServices$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(ServiceActions.loadAllServices),
      concatMap(() =>
        this.serviceService.getAllServices().pipe(
          map(services => ServiceActions.loadAllServicesSuccess({ services })),
          catchError(error => of(ServiceActions.loadAllServicesFailure({ error }))))
      )
    );
  }
  );

  deleteService$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ServiceActions.deleteService),
      concatMap(({id}) =>
        this.serviceService.deleteService(id).pipe(
          map(() => ServiceActions.deleteServiceSuccess({id})),
          catchError(error => of(ServiceActions.deleteServiceFailure({error})))
        )
      )
    );

  }
  );

  addService$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ServiceActions.addService),
      concatMap(({service}) =>
        this.serviceService.addService(service).pipe(
          map(service => ServiceActions.addServiceSuccess({service})),
          catchError(error => of(ServiceActions.addServiceFailure({error})))
        )
      )
    );
  }
  );


  constructor(private actions$: Actions,
              private serviceService:ServiceService) {}
}

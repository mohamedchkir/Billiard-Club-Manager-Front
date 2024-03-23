import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromService from './service.reducer';

export const selectServiceState = createFeatureSelector<fromService.State>(
  fromService.serviceFeatureKey
);

export const selectServices = createSelector(
  selectServiceState,
  (state) => state.services
);

export const selectError = createSelector(
  selectServiceState,
  (state) => state.error
);

export const selectServiceById = (id: number) =>
  createSelector(selectServices, (services) => services.find((service) => service.id === id));

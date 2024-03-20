import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCity from './city.reducer';

export const selectCityState = createFeatureSelector<fromCity.State>(
  fromCity.cityFeatureKey
);

export const selectCities = createSelector(
  selectCityState,
  (state) => state.cities
);

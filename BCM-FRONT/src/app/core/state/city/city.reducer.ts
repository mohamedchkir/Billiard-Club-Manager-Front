import { createFeature, createReducer, on } from '@ngrx/store';
import { CityActions } from './city.actions';
import {CityResponseDto} from "../../model/CityResponseDto";
import {SimpleErrorResponse} from "../../model/SimpleErrorResponse";

export const cityFeatureKey = 'city';

export interface State {
  cities: CityResponseDto[]; // Define your state shape here
  error: SimpleErrorResponse | null;

}

export const initialState: State = {
  cities: [],
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(CityActions.loadAllCitiesSuccess, (state, { cities }) => ({ ...state, cities })),
  on(CityActions.loadAllCitiesFailure, (state, { error }) => ({ ...state, error })),
  on(CityActions.loadAllCities, (state) => ({ ...state, cities: [], error: null })),
  on(CityActions.deleteCity, (state) => ({ ...state, error: null })),
  on(CityActions.deleteCitySuccess, (state, { id }) => ({ ...state, cities: state.cities.filter(city => city.id !== id) })),
  on(CityActions.deleteCityFailure, (state, { error }) => ({ ...state, error })),
);

export const cityFeature = createFeature({
  name: cityFeatureKey,
  reducer,
});


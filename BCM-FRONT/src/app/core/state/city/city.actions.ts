import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {SimpleErrorResponse} from "../../model/SimpleErrorResponse";
import {CityResponseDto} from "../../model/CityResponseDto";

export const CityActions = createActionGroup({
  source: 'City',
  events: {
    LoadAllCities: emptyProps(),
    LoadAllCitiesSuccess: props<{ cities: CityResponseDto[] }>(),
    LoadAllCitiesFailure: props<{ error: SimpleErrorResponse }>(),
    DeleteCity: props<{ id: number }>(),
    DeleteCitySuccess: props<{ id: number }>(),
    DeleteCityFailure: props<{ error: SimpleErrorResponse }>()

  }
});

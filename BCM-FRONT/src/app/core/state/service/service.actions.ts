import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {ServiceResponseDto} from "../../model/ServiceResponseDto";
import {SimpleErrorResponse} from "../../model/SimpleErrorResponse";

export const ServiceActions = createActionGroup({
  source: 'Service',
  events: {
    LoadAllServices: emptyProps(),
    LoadAllServicesSuccess: props<{ services: ServiceResponseDto[] }>(),
    LoadAllServicesFailure: props<{ error: SimpleErrorResponse }>(),
    DeleteService: props<{ id: number }>(),
    DeleteServiceSuccess: props<{ id: number }>(),
    DeleteServiceFailure: props<{ error: SimpleErrorResponse }>(),
    AddService: props<{ service: FormData }>(),
    AddServiceSuccess: props<{ service: ServiceResponseDto }>(),
    AddServiceFailure: props<{ error: SimpleErrorResponse }>(),
  }
});

import { createFeature, createReducer, on } from '@ngrx/store';
import { ServiceActions } from './service.actions';
import {ServiceResponseDto} from "../../model/ServiceResponseDto";
import {SimpleErrorResponse} from "../../model/SimpleErrorResponse";

export const serviceFeatureKey = 'service';

export interface State {
  services: ServiceResponseDto[];
  error: SimpleErrorResponse | null;

}

export const initialState: State = {
  services: [],
  error: null,

};

export const reducer = createReducer(
  initialState,
  on(ServiceActions.loadAllServicesSuccess, (state, { services }) => ({ ...state, services })),
  on(ServiceActions.loadAllServicesFailure, (state, { error }) => ({ ...state, error })),
  on(ServiceActions.loadAllServices, (state) => ({ ...state, services: [], error: null })),
  on(ServiceActions.deleteService, (state) => ({ ...state, error: null })),
  on(ServiceActions.deleteServiceSuccess, (state, { id }) => ({ ...state, services: state.services.filter(service => service.id !== id) })),
  on(ServiceActions.deleteServiceFailure, (state, { error }) => ({ ...state, error })),
  on(ServiceActions.addService, (state) => ({ ...state, error: null })),
  on(ServiceActions.addServiceSuccess, (state, { service }) => ({ ...state, services: [...state.services, service] })),
  on(ServiceActions.addServiceFailure, (state, { error }) => ({ ...state, error })),


);


export const serviceFeature = createFeature({
  name: serviceFeatureKey,
  reducer,
});


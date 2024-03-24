import { Injectable } from '@angular/core';
import {ServiceResponseDto} from "../../model/ServiceResponseDto";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  serviceUrl = 'http://localhost:8888/api/v1/service';

  getAllServices(): Observable<ServiceResponseDto[]> {
    return this.http.get<ServiceResponseDto[]>(this.serviceUrl);
  }

  deleteService(id: number): Observable<void> {
    return this.http.delete<void>(`${this.serviceUrl}/${id}`);
  }

  addService(service: FormData): Observable<ServiceResponseDto> {
    return this.http.post<ServiceResponseDto>(this.serviceUrl, service);
  }

  constructor(private http:HttpClient) { }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CityResponseDto} from "../../model/CityResponseDto";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private citiesUrl = 'http://localhost:8888/api/v1/city';

  getAllCities():Observable<CityResponseDto[]> {
    return this.http.get<CityResponseDto[]>(this.citiesUrl);
  }
  constructor(private http: HttpClient) { }

}

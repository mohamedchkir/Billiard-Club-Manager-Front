import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClubResponseDto} from "../../model/ClubResponseDto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  private clubsUrl = 'http://localhost:8888/api/v1/club';
  getAllClubs(): Observable<ClubResponseDto[]> {
    return this.http.get<ClubResponseDto[]>(this.clubsUrl);
  }

  constructor(private http: HttpClient) { }
}

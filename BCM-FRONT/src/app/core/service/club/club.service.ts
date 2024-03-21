import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClubResponseDto} from "../../model/ClubResponseDto";
import {Observable} from "rxjs";
import {ClubPageableResponse} from "../../model/ClubPageableResponse";

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  private clubsUrl = 'http://localhost:8888/api/v1/club';
  getAllClubs(page: number,size:number): Observable<ClubPageableResponse> {
    return this.http.get<ClubPageableResponse>(this.clubsUrl, {
      params: {
        page: page.toString(),
        size: size.toString()
      }
    });
  }

  searchClubs(name: string, cityId: string, page: number, size: number): Observable<ClubPageableResponse> {
    return this.http.get<ClubPageableResponse>(`${this.clubsUrl}/search`, {
      params: {
        name,
        cityId,
        page: page.toString(),
        size: size.toString()
      }
    });
  }

  constructor(private http: HttpClient) { }
}

import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ClubResponseDto} from "../../model/ClubResponseDto";
import {HttpClient} from "@angular/common/http";
import {UserSimpleResponseDto} from "../../model/UserSimpleResponseDto";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playerUrl = 'http://localhost:8888/api/v1/user';
  private searchUrl = 'http://localhost:8888/api/v1/user/search';
  getAllPlayers(): Observable<UserSimpleResponseDto[]> {
    return this.http.get<UserSimpleResponseDto[]>(this.playerUrl);
  }

  searchPlayers(word: string, cityId: number): Observable<UserSimpleResponseDto[]> {
    return this.http.get<UserSimpleResponseDto[]>(this.searchUrl, {params: {word, cityId: cityId.toString()}});
  }

  deletePlayer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.playerUrl}/${id}`);
  }

  changeRole(id: number): Observable<void> {
    return this.http.patch<void>(`${this.playerUrl}/change-role/${id}`, {});
  }

  constructor(private http: HttpClient) { }
}

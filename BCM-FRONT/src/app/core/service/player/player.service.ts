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
  getAllPlayers(): Observable<UserSimpleResponseDto[]> {
    return this.http.get<UserSimpleResponseDto[]>(this.playerUrl);
  }

  constructor(private http: HttpClient) { }
}

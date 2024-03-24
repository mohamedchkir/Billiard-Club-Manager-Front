import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {UserSimpleResponseDto} from "../../../core/model/UserSimpleResponseDto";
import {SimpleErrorResponse} from "../../../core/model/SimpleErrorResponse";
import {select, Store} from "@ngrx/store";
import {PlayerActions} from "../../../core/state/player/player.actions";
import {selectClient, selectError} from "../../../core/state/player/player.selectors";
import {CityResponseDto} from "../../../core/model/CityResponseDto";
import {CityActions} from "../../../core/state/city/city.actions";
import {selectCities} from "../../../core/state/city/city.selectors";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent implements OnInit{
  players$!: Observable<UserSimpleResponseDto[]>;
  error$!: Observable<SimpleErrorResponse> ;
  cities$!: Observable<CityResponseDto[]>;
  constructor(private store: Store) {
  }
  ngOnInit(): void {
    this.store.dispatch(PlayerActions.loadAllPlayers());
    this.store.dispatch(CityActions.loadAllCities());
    this.players$ = this.store.pipe(select(selectClient));
    this.error$ = this.store.pipe(select(selectError)) as Observable<SimpleErrorResponse>;
    this.cities$ = this.store.pipe(select(selectCities));
  }
  onSearch(firstNameOrLast: string,  cityId: string) {
    this.store.dispatch(PlayerActions.searchPlayers({firstNameOrLast, cityId}));
  }


}

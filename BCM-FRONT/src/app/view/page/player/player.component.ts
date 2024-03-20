import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {UserSimpleResponseDto} from "../../../core/model/UserSimpleResponseDto";
import {SimpleErrorResponse} from "../../../core/model/SimpleErrorResponse";
import {select, Store} from "@ngrx/store";
import {PlayerActions} from "../../../core/state/player/player.actions";
import {selectClient, selectError} from "../../../core/state/player/player.selectors";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent implements OnInit{
  players$!: Observable<UserSimpleResponseDto[]>;
  error$!: Observable<SimpleErrorResponse> ;
  constructor(private store: Store) {
  }
  ngOnInit(): void {
    this.store.dispatch(PlayerActions.loadAllPlayers());
    this.players$ = this.store.pipe(select(selectClient));
    this.error$ = this.store.pipe(select(selectError)) as Observable<SimpleErrorResponse>;
  }


}

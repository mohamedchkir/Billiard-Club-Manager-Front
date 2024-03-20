import {Component, OnInit} from '@angular/core';
import {SimpleErrorResponse} from "../../../core/model/SimpleErrorResponse";
import {Observable} from "rxjs";
import {ClubResponseDto} from "../../../core/model/ClubResponseDto";
import {select, Store} from "@ngrx/store";
import {ClubActions} from "../../../core/state/club/club.actions";
import {selectClubs, selectError} from "../../../core/state/club/club.selectors";

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrl: './club.component.css'
})
export class ClubComponent implements OnInit{
  clubs$!: Observable<ClubResponseDto[]>;
  error$!: Observable<SimpleErrorResponse>;

  constructor( private store :Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(ClubActions.loadAllClubs());

    this.clubs$ = this.store.pipe(select(selectClubs));
    this.error$ = this.store.pipe(select(selectError)) as Observable<SimpleErrorResponse>;
  }


}

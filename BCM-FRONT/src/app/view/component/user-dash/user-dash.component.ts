import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {UserSimpleResponseDto} from "../../../core/model/UserSimpleResponseDto";
import {selectError, selectPlayers} from "../../../core/state/player/player.selectors";
import {PlayerActions} from "../../../core/state/player/player.actions";
import {SimpleErrorResponse} from "../../../core/model/SimpleErrorResponse";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent implements OnInit {
  displayedColumns: string[] = ['No','imageUrl','firstName', 'lastName', 'telephone', 'email', 'numberOfToken', 'city', 'role', 'actions'];



  users$!: Observable<UserSimpleResponseDto[]>;
  error$!: Observable<SimpleErrorResponse>;

  dataSource = new MatTableDataSource<UserSimpleResponseDto>([]);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(PlayerActions.loadAllPlayers());
    this.users$ = this.store.pipe(select(selectPlayers));
    this.error$ = this.store.pipe(select(selectError)) as Observable<SimpleErrorResponse>;

    this.users$.subscribe(users => {
      this.dataSource = new MatTableDataSource(users);
    });
  }

  deleteUser(id: number) {
    this.store.dispatch(PlayerActions.deletePlayer({id}));
  }
  changeRole(id: number) {
    this.store.dispatch(PlayerActions.changeRole({id}));
  }
}

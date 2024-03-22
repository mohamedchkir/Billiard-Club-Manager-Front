import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {ClubResponseDto} from "../../../core/model/ClubResponseDto";
import {selectClubPageable, selectClubs} from "../../../core/state/club/club.selectors";
import {ClubActions} from "../../../core/state/club/club.actions";
import {SimpleErrorResponse} from "../../../core/model/SimpleErrorResponse";
import { MatTableDataSource } from '@angular/material/table';
import {ClubPageableResponse} from "../../../core/model/ClubPageableResponse";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-club-dash',
  templateUrl: './club-dash.component.html',
  styleUrl: './club-dash.component.css'
})
export class ClubDashComponent implements OnInit{
    pageEvent: {
    pageIndex: number;
    pageSize: number;
    length: number;
  } = {pageIndex: 0, pageSize: 5, length: 0};

    clubs: ClubResponseDto[] = [];
    pageable :Observable<ClubPageableResponse> |null = this.store.pipe(select(selectClubPageable));
    error$ = this.store.pipe(select(selectClubs));
    dataSource = new MatTableDataSource<ClubResponseDto>();

    displayedColumns: string[] = ['No','imageUrl','name', 'address','openingHour','closeHour','description','numberOfToken','city','services','actions'];

    constructor(private store: Store,
                private dialog:MatDialog) {}

    ngOnInit(): void {
        this.store.dispatch(ClubActions.loadAllClubs({page: this.pageEvent.pageIndex, size: this.pageEvent.pageSize}));
        this.pageable?.subscribe(
            pageable => {
                this.pageEvent.length = pageable.totalElements;
                this.clubs = pageable.content;
                this.dataSource.data = new MatTableDataSource<ClubResponseDto>(this.clubs).data;
            },
            error => {
                console.log(error);
            }
        );
    }

    deleteClub(id: number) {
        this.store.dispatch(ClubActions.deleteClub({id}));
    }

}

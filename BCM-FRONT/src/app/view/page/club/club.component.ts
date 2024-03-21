import {Component, OnInit} from '@angular/core';
import {ClubResponseDto} from "../../../core/model/ClubResponseDto";
import {select, Store} from "@ngrx/store";
import {ClubActions} from "../../../core/state/club/club.actions";
import {selectClubError, selectClubPageable} from "../../../core/state/club/club.selectors";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrl: './club.component.css'
})
export class ClubComponent implements OnInit {
  pageEvent: {
    pageIndex: number;
    pageSize: number;
    length: number;
  } = {pageIndex: 0, pageSize: 1, length: 0};

  clubs: ClubResponseDto[] = [];
  pageable$ = this.store.pipe(select(selectClubPageable));
  error$ = this.store.pipe(select(selectClubError));

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(ClubActions.loadAllClubs({page: this.pageEvent.pageIndex, size: this.pageEvent.pageSize}));
    this.pageable$.subscribe(
      pageable => {
        this.pageEvent.length = pageable.totalElements;
        this.clubs = pageable.content;
      }
    );
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent.pageSize = e.pageSize;
    this.pageEvent.pageIndex = e.pageIndex;
    this.store.dispatch(ClubActions.loadAllClubs({
      page: this.pageEvent.pageIndex,
      size: this.pageEvent.pageSize
    }));
  }

}

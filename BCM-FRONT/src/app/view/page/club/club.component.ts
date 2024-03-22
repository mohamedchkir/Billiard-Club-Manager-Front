import {Component, OnInit} from '@angular/core';
import {ClubResponseDto} from "../../../core/model/ClubResponseDto";
import {select, Store} from "@ngrx/store";
import {ClubActions} from "../../../core/state/club/club.actions";
import {selectClubError, selectClubPageable} from "../../../core/state/club/club.selectors";
import {PageEvent} from "@angular/material/paginator";
import {Observable} from "rxjs";
import {CityResponseDto} from "../../../core/model/CityResponseDto";
import {selectCities} from "../../../core/state/city/city.selectors";
import {CityActions} from "../../../core/state/city/city.actions";

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
  cities$!: Observable<CityResponseDto[]>;


  constructor(private store: Store) {
  }


  ngOnInit(): void {
    this.store.dispatch(CityActions.loadAllCities());
    this.store.dispatch(ClubActions.loadAllClubs({page: this.pageEvent.pageIndex, size: this.pageEvent.pageSize}));
    this.pageable$.subscribe(
      pageable => {
        this.pageEvent.length = pageable.totalElements;
        this.clubs = pageable.content;
      }
    );
    this.cities$ = this.store.pipe(select(selectCities));
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent.pageSize = e.pageSize;
    this.pageEvent.pageIndex = e.pageIndex;
    this.store.dispatch(ClubActions.loadAllClubs({
      page: this.pageEvent.pageIndex,
      size: this.pageEvent.pageSize
    }));
  }

  onSearch(name: string, cityId: string) {
    this.store.dispatch(ClubActions.searchClubs({name, cityId, page: this.pageEvent.pageIndex, size: this.pageEvent.pageSize}));

  }

}

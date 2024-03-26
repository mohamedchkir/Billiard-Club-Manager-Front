import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {CityResponseDto} from "../../../core/model/CityResponseDto";
import {SimpleErrorResponse} from "../../../core/model/SimpleErrorResponse";
import {MatTableDataSource} from "@angular/material/table";
import {select, Store} from "@ngrx/store";
import {CityActions} from "../../../core/state/city/city.actions";
import {selectCities, selectError} from "../../../core/state/city/city.selectors";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-city-dash',
  templateUrl: './city-dash.component.html',
  styleUrl: './city-dash.component.css'
})
export class CityDashComponent implements OnInit {

  displayedColumns: string[] = ['No', 'name', 'actions'];
  city$!: Observable<CityResponseDto[]>;
  error$!: Observable<SimpleErrorResponse>;
  dataSource = new MatTableDataSource<CityResponseDto>([]);
  pageSize = 5;
  pageIndex = 0;
  totalItems = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(CityActions.loadAllCities());
    this.city$ = this.store.pipe(select(selectCities));
    this.error$ = this.store.pipe(select(selectError)) as Observable<SimpleErrorResponse>;

    this.city$.subscribe(cities => {
      this.dataSource = new MatTableDataSource(cities);
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteCity(id: number) {
    this.store.dispatch(CityActions.deleteCity({id}));
  }




}

import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {CityResponseDto} from "../../../core/model/CityResponseDto";
import {SimpleErrorResponse} from "../../../core/model/SimpleErrorResponse";
import {CityActions} from "../../../core/state/city/city.actions";
import {selectCities, selectError} from '../../../core/state/city/city.selectors';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  cities$!: Observable<CityResponseDto[]>;
  error$!: Observable<SimpleErrorResponse>;
  constructor(private store: Store) {
  }
onSearch(firstName: string, cityId: string) {
  console.log(firstName, cityId)
  }

  ngOnInit(): void {
    this.store.dispatch(CityActions.loadAllCities());
    this.cities$ = this.store.pipe(select(selectCities));
    this.error$ = this.store.pipe(select(selectError)) as Observable<SimpleErrorResponse>;
  }


}

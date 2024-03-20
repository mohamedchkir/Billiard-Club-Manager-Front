import { Component } from '@angular/core';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  constructor(private store: Store) {
  }

}

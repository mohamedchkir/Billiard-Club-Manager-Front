import {Component, OnInit} from '@angular/core';
import {Clipboard} from "@angular/cdk/clipboard";
import {ToastrService} from "ngx-toastr";
import {Observable, window} from "rxjs";
import {ClubResponseDto} from "../../../core/model/ClubResponseDto";
import {ClubActions} from "../../../core/state/club/club.actions";
import {select, Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {selectClubById} from "../../../core/state/club/club.selectors";

@Component({
  selector: 'app-club-details',
  templateUrl: './club-details.component.html',
  styleUrl: './club-details.component.css'
})
export class ClubDetailsComponent{
   club$!: Observable<ClubResponseDto | undefined> ;

  constructor(private clipboard: Clipboard,private store: Store, private toastr: ToastrService,private activeRoute: ActivatedRoute,) {
  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      const id = params['id'];
      this.store.dispatch(ClubActions.loadClubById({id}));
      this.club$ = this.store.pipe(select(selectClubById));



    });
  }
//todo check club details
  share() {
    // let url = window.location.href;
    // this.clipboard.copy(url);
    this.toastr.success('Link copied to clipboard');
  }



}

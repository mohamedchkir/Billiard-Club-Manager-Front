import { Component } from '@angular/core';
import {Clipboard} from "@angular/cdk/clipboard";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-club-details',
  templateUrl: './club-details.component.html',
  styleUrl: './club-details.component.css'
})
export class ClubDetailsComponent {
  constructor(private clipboard: Clipboard, private toastr: ToastrService) {
  }
  share() {
    let url = window.location.href;
    this.clipboard.copy(url);
    this.toastr.success('Link copied to clipboard');
  }
}

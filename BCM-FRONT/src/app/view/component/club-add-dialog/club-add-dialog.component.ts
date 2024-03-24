import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { ClubActions } from "../../../core/state/club/club.actions";
import { MatDialogRef } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { CityResponseDto } from "../../../core/model/CityResponseDto";
import { ServiceActions } from "../../../core/state/service/service.actions";
import { CityActions } from "../../../core/state/city/city.actions";
import { selectCities } from "../../../core/state/city/city.selectors";
import { ServiceResponseDto } from "../../../core/model/ServiceResponseDto";
import { selectServices } from "../../../core/state/service/service.selectors";

@Component({
  selector: 'app-club-add-dialog',
  templateUrl: './club-add-dialog.component.html',
  styleUrl: './club-add-dialog.component.css'
})
export class ClubAddDialogComponent implements OnInit {
  clubForm!: FormGroup;
  services$!: Observable<ServiceResponseDto[]>;
  cities$!: Observable<CityResponseDto[]>;
  image: File = new File([], '');
  servicesSelected: number[] = [];

  constructor(private fb: FormBuilder,
              private store: Store,
              private dialogRef: MatDialogRef<ClubAddDialogComponent>) {
  }

  onCheckboxChange(event: any) {
    const value = event.target.value;
    if (event.target.checked && !this.servicesSelected.includes(value)) {
      this.servicesSelected.push(value);
    } else if (!event.target.checked) {
      const index = this.servicesSelected.indexOf(value);
      if (index !== -1) {
        this.servicesSelected.splice(index, 1);
      }
    }
  }

  onImageChange(event: any) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.image = file;
      console.log(event.target.files);
    }
  }

  ngOnInit(): void {
    this.store.dispatch(ServiceActions.loadAllServices());
    this.store.dispatch(CityActions.loadAllCities());
    this.cities$ = this.store.select(selectCities);
    this.services$= this.store.select(selectServices)
    this.clubForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      cityId: ['', Validators.required],
      openingHour: ['', Validators.required],
      closeHour: ['', Validators.required],
      description: ['', Validators.required],
      numberOfToken: ['', Validators.required]
    });
  }

  addClub() {
    console.log(this.servicesSelected)
    const formData = new FormData();
    formData.append('file', this.image);
    formData.append('name', this.clubForm.get('name')?.value);
    formData.append('address', this.clubForm.get('address')?.value);
    formData.append('cityId', this.clubForm.get('cityId')?.value);
    formData.append('openingHour', this.clubForm.get('openingHour')?.value);
    formData.append('closeHour', this.clubForm.get('closeHour')?.value);
    formData.append('description', this.clubForm.get('description')?.value);
    formData.append('numberOfToken', this.clubForm.get('numberOfToken')?.value);
    formData.append('serviceIds', this.servicesSelected.toString())

    this.store.dispatch(ClubActions.addClub({formData: formData}));
    this.dialogRef.close();
  }


}

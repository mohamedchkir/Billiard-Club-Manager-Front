import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {ServiceActions} from "../../../core/state/service/service.actions";

@Component({
  selector: 'app-service-add-bottom-sheet',
  templateUrl: './service-add-bottom-sheet.component.html',
  styleUrl: './service-add-bottom-sheet.component.css'
})
export class ServiceAddBottomSheetComponent implements OnInit{
  serviceForm!: FormGroup;
  image: File = new File([], '');

  constructor(private formBuilder: FormBuilder,
              private dialogRef: MatBottomSheetRef<ServiceAddBottomSheetComponent>,
              private store: Store) {
  }

  onImageChange(event: any) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.image = file;
      console.log(event.target.files);
    }
  }

  ngOnInit(): void {
    this.serviceForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  addService() {
    const formData = new FormData();
    formData.append('file', this.image);
    formData.append('name', this.serviceForm.get('name')?.value);
    this.store.dispatch(ServiceActions.addService({service: formData}));
    this.dialogRef.dismiss();
  }

}

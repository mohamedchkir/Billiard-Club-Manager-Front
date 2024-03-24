import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAddBottomSheetComponent } from './service-add-bottom-sheet.component';

describe('ServiceAddBottomSheetComponent', () => {
  let component: ServiceAddBottomSheetComponent;
  let fixture: ComponentFixture<ServiceAddBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceAddBottomSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceAddBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityAddBottomSheetComponent } from './city-add-bottom-sheet.component';

describe('CityAddBottomSheetComponent', () => {
  let component: CityAddBottomSheetComponent;
  let fixture: ComponentFixture<CityAddBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityAddBottomSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CityAddBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

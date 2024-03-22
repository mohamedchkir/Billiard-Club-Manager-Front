import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDashComponent } from './city-dash.component';

describe('CityDashComponent', () => {
  let component: CityDashComponent;
  let fixture: ComponentFixture<CityDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityDashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CityDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

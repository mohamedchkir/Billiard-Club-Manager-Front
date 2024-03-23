import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDashComponent } from './service-dash.component';

describe('ServiceDashComponent', () => {
  let component: ServiceDashComponent;
  let fixture: ComponentFixture<ServiceDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceDashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubDashComponent } from './club-dash.component';

describe('ClubDashComponent', () => {
  let component: ClubDashComponent;
  let fixture: ComponentFixture<ClubDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClubDashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClubDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

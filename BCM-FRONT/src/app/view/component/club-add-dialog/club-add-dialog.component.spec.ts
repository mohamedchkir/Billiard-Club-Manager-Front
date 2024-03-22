import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubAddDialogComponent } from './club-add-dialog.component';

describe('ClubAddDialogComponent', () => {
  let component: ClubAddDialogComponent;
  let fixture: ComponentFixture<ClubAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClubAddDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClubAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

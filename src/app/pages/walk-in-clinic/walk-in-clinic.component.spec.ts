import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkInClinicComponent } from './walk-in-clinic.component';

describe('WalkInClinicComponent', () => {
  let component: WalkInClinicComponent;
  let fixture: ComponentFixture<WalkInClinicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkInClinicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkInClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

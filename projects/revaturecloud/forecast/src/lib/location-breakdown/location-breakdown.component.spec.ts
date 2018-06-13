import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationBreakdownComponent } from './location-breakdown.component';

describe('LocationBreakdownComponent', () => {
  let component: LocationBreakdownComponent;
  let fixture: ComponentFixture<LocationBreakdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationBreakdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

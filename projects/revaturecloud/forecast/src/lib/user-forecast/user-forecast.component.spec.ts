import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserForecastComponent } from './user-forecast.component';

describe('UserForecastComponent', () => {
  let component: UserForecastComponent;
  let fixture: ComponentFixture<UserForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { UserForecastComponent } from './user-forecast/user-forecast.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastComponent } from './forecast.component';

import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DummyComponent } from './dummy/dummy.component';

import { By } from '@angular/platform-browser';

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ForecastComponent,
        UserForecastComponent,
        DummyComponent
      ],
      imports: [
        MatTabsModule,
        MatCardModule,
        MatIconModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('runs ngOnInit function on initialization', () => {
    let spy = spyOn(component, 'ngOnInit');

    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('should display user forecast initially and no other tab should render', () => {
    fixture.detectChanges();
    let userForecast = fixture.debugElement.query(By.css('lib-user-forecast'));
    let dummy = fixture.debugElement.query(By.css('lib-dummy'));

    expect(userForecast).toBeTruthy();
    expect(dummy).toBeFalsy();
  });
});

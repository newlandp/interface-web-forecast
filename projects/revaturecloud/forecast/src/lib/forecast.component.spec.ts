import { PolarAreaChartComponent } from './polar-area-chart/polar-area-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastComponent } from './forecast.component';

import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DummyComponent } from './dummy/dummy.component';

import { By } from '@angular/platform-browser';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import {ChartsModule} from 'ng2-charts';
import { ForecastModule } from './forecast.module';


describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [

      ],
      imports: [
        ForecastModule

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

  xit('should display user forecast initially and no other tab should render', () => {
    fixture.detectChanges();
    let userForecast = fixture.debugElement.query(By.css('div[name="user-forecast"]'));
    let dummy = fixture.debugElement.query(By.css('div[name="dummy"]'));


    console.log(userForecast);
    console.log(dummy);
    expect(userForecast).toBeTruthy();
    expect(dummy).toBeFalsy();
  });
});

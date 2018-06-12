import { ForecastService } from './forecast.service';
import { NgModule } from '@angular/core';

import { ForecastComponent } from './forecast.component';
import { UserForecastComponent } from './user-forecast/user-forecast.component';
import { DummyComponent } from './dummy/dummy.component';

import { HttpClientModule } from '@angular/common/http';

import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ChartsModule} from 'ng2-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PolarAreaChartComponent } from './polar-area-chart/polar-area-chart.component';


@NgModule({
  imports: [
    MatTabsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartsModule
  ],
  declarations: [
    ForecastComponent,
    UserForecastComponent,
    DummyComponent,
    BarChartComponent,
    LineChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    PolarAreaChartComponent
  ],
  providers: [
    ForecastService
  ],
  exports: [
    ForecastComponent
  ]
})
export class ForecastModule { }

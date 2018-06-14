import { ForecastService } from './forecast.service';
import { NgModule } from '@angular/core';

import { ForecastComponent } from './forecast.component';
import { DummyComponent } from './dummy/dummy.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule, MatNativeDateModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PolarAreaChartComponent } from './polar-area-chart/polar-area-chart.component';
import { SnapshotsComponent } from './snapshots/snapshots.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationBreakdownComponent } from './location-breakdown/location-breakdown.component';
import { InputSelectorComponent } from './input-selector/input-selector.component';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartsModule
  ],
  declarations: [
    ForecastComponent,
    DummyComponent,
    BarChartComponent,
    LineChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    PolarAreaChartComponent,
    SnapshotsComponent,
    LocationsComponent,
    LocationBreakdownComponent,
    InputSelectorComponent
  ],
  providers: [
    ForecastService,
    MatDatepickerModule
  ],
  exports: [
    ForecastComponent
  ]
})
export class ForecastModule { }

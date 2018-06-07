import { NgModule } from '@angular/core';
import { ForecastComponent } from './forecast.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NgxChartsModule} from '@swimlane/ngx-charts';

import { UserForecastComponent } from './user-forecast/user-forecast.component';
import { DummyComponent } from './dummy/dummy.component';
import { ChartsComponent } from './charts/charts.component';

@NgModule({
  imports: [
    NgbModule.forRoot(),

    MatTabsModule,
    MatCardModule,
    MatIconModule,

    BrowserAnimationsModule,
    NgxChartsModule
  ],
  declarations: [
    ForecastComponent,
    UserForecastComponent,
    DummyComponent,
    ChartsComponent],
  exports: [ForecastComponent]
})
export class ForecastModule { }

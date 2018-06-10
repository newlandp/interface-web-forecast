import { ForecastService } from './forecast.service';
import { NgModule } from '@angular/core';

import { ForecastComponent } from './forecast.component';
import { UserForecastComponent } from './user-forecast/user-forecast.component';
import { DummyComponent } from './dummy/dummy.component';
import { ChartsComponent } from './charts/charts.component';

import { HttpClientModule } from '@angular/common/http';

import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MatTabsModule,
    BrowserAnimationsModule,

    HttpClientModule
  ],
  declarations: [
    ForecastComponent,
    UserForecastComponent,
    DummyComponent,
    ChartsComponent
  ],
  providers: [
    ForecastService
  ],
  exports: [
    ForecastComponent
  ]
})
export class ForecastModule { }

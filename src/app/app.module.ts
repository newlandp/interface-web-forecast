import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ForecastModule } from 'projects/revaturecloud/forecast/src/public_api';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    ForecastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

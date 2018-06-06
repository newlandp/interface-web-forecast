import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ForecastModule } from 'projects/revaturecloud/forecast/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ForecastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

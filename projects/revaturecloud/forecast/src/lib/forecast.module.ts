import { NgModule } from '@angular/core';
import { ForecastComponent } from './forecast.component';
import { UserForecastComponent } from './user-forecast/user-forecast.component';
import { DummyComponent } from './dummy/dummy.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [BrowserModule, CommonModule
  ],
  declarations: [ForecastComponent, UserForecastComponent, DummyComponent],
  exports: [ForecastComponent]
})
export class ForecastModule { }

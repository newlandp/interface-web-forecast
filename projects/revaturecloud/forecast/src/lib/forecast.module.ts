import { NgModule } from '@angular/core';
import { ForecastComponent } from './forecast.component';
import { UserForecastComponent } from './user-forecast/user-forecast.component';
import { DummyComponent } from './dummy/dummy.component';

@NgModule({
  imports: [
  ],
  declarations: [ForecastComponent, UserForecastComponent, DummyComponent],
  exports: [ForecastComponent]
})
export class ForecastModule { }

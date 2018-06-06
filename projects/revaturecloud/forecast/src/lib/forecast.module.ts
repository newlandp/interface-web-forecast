import { NgModule } from '@angular/core';
import { ForecastComponent } from './forecast.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserForecastComponent } from './user-forecast/user-forecast.component';
import { DummyComponent } from './dummy/dummy.component';

@NgModule({
  imports: [
    NgbModule.forRoot(),
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  declarations: [
    ForecastComponent,
    UserForecastComponent,
    DummyComponent],
  exports: [ForecastComponent]
})
export class ForecastModule { }

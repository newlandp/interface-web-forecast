import { NgModule } from '@angular/core';
import { ForecastComponent } from './forecast.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    NgbModule.forRoot(),
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  declarations: [
    ForecastComponent],
  exports: [ForecastComponent]
})
export class ForecastModule { }

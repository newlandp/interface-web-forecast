import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ForecastModule } from 'projects/revaturecloud/forecast/src/public_api';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    NgbModule.forRoot(),

    MatTabsModule,
    MatCardModule,
    MatIconModule,
    BrowserAnimationsModule,

    ForecastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

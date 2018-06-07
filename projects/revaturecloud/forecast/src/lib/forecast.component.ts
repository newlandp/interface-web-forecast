import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserForecastComponent } from './user-forecast/user-forecast.component';
import { DummyComponent } from './dummy/dummy.component';

@Component({
  selector: 'lib-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']

})

export class ForecastComponent implements OnInit {
  constructor() { }

  ngOnInit() {

  }
}

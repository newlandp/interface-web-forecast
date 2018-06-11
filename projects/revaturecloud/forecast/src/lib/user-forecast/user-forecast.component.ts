import { Component, OnInit, Input } from '@angular/core';
import { ForecastService } from '../../public_api';

@Component({
  selector: 'lib-user-forecast',
  templateUrl: './user-forecast.component.html',
  styleUrls: ['./user-forecast.component.css']
})
export class UserForecastComponent implements OnInit {
  @Input('snapshots') snapshots: any[];

  constructor() {}

  ngOnInit() {
    console.log(this.snapshots);
  }

}

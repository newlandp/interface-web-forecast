import { Component, Input, OnChanges } from '@angular/core';
import { ForecastService } from '../../public_api';

@Component({
  selector: 'lib-user-forecast',
  templateUrl: './user-forecast.component.html',
  styleUrls: ['./user-forecast.component.css']
})
export class UserForecastComponent implements OnChanges {
  @Input('snapshots') snapshots: any[];

  constructor() {}

  ngOnChanges() {
    console.log(this.snapshots);
  }

}

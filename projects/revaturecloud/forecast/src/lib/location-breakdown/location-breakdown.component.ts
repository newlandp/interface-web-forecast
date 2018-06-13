import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'lib-location-breakdown',
  templateUrl: './location-breakdown.component.html',
  styleUrls: ['./location-breakdown.component.css']
})
export class LocationBreakdownComponent implements OnChanges {

  // do breakdown by total rooms and users

  @Input('snapshots') snapshots: any[];

  constructor() { }

  ngOnChanges() {
  }

}

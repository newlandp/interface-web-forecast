import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'lib-location-breakdown',
  templateUrl: './location-breakdown.component.html',
  styleUrls: ['./location-breakdown.component.css']
})
export class LocationBreakdownComponent implements OnChanges {

  @Input('restonSnapshots') restonSnapshots: any[];
  @Input('tampaSnapshots') tampaSnapshots: any[];
  @Input('newYorkSnapshots') newYorkSnapshots: any[];

  constructor() {}

  ngOnChanges() {}

}

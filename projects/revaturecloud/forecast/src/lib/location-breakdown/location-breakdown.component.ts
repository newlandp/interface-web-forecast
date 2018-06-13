import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'lib-location-breakdown',
  templateUrl: './location-breakdown.component.html',
  styleUrls: ['./location-breakdown.component.css']
})
export class LocationBreakdownComponent implements OnChanges {

  restonSnapshots: any[];
  tampaSnapshots: any[];
  newYorkSnapshots: any[];

  @Input('snapshots') snapshots: any[];

  constructor() {}

  ngOnChanges() {
    this.restonSnapshots = this.snapshots.filter(s => s.location == 'Reston');
    this.tampaSnapshots = this.snapshots.filter(s => s.location == 'Tampa');
    this.newYorkSnapshots = this.snapshots.filter(s => s.location == 'New York');
  }

}

import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'lib-snapshots',
  templateUrl: './snapshots.component.html',
  styleUrls: ['./snapshots.component.css']
})
export class SnapshotsComponent implements OnChanges {

  @Input('allSnapshots') allSnapshots: any[];
  @Input('restonSnapshots') restonSnapshots: any[];
  @Input('tampaSnapshots') tampaSnapshots: any[];
  @Input('newYorkSnapshots') newYorkSnapshots: any[];

  constructor() { }

  ngOnChanges() {}

}

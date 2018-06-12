import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'lib-snapshots',
  templateUrl: './snapshots.component.html',
  styleUrls: ['./snapshots.component.css']
})
export class SnapshotsComponent implements OnChanges {

  @Input('snapshots') snapshots: any[];

  constructor() { }

  ngOnChanges() {
    console.log(this.snapshots);
  }

}

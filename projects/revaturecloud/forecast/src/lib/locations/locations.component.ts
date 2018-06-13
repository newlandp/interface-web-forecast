import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  @Input('snapshots') snapshots: any[];

  restonSnapshots: any[];
  tampaSnapshots: any[];
  newYorkSnapshots: any[];

  constructor() { }

  ngOnInit() {
    this.restonSnapshots = this.snapshots.filter(s => s.location == 'Reston');
    this.tampaSnapshots = this.snapshots.filter(s => s.location == 'Tampa');
    this.newYorkSnapshots = this.snapshots.filter(s => s.location == 'New York');
  }

}

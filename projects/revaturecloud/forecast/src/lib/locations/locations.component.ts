import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  @Input('allSnapshots') allSnapshots: any[];
  @Input('restonSnapshots') restonSnapshots: any[];
  @Input('tampaSnapshots') tampaSnapshots: any[];
  @Input('newYorkSnapshots') newYorkSnapshots: any[];

  constructor() { }

  ngOnInit() {}

}

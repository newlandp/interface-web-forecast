import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'lib-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnChanges {

  @Input('snapshots') snapshots: any[];

  constructor() { }

  ngOnChanges() {
    console.log(this.snapshots);
  }

}

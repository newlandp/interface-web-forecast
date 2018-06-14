import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-input-selector',
  templateUrl: './input-selector.component.html',
  styleUrls: ['./input-selector.component.css']
})
export class InputSelectorComponent implements OnInit {

  myControl;
  startDate;
  locations = ['NY', 'Reston', 'Tampa'];

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log(this.startDate.toString());
  }
}

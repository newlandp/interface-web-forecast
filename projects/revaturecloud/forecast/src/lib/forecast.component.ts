import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  tab: string;

  constructor() { }

  ngOnInit() {
  }

  setTab(value: string) {
    this.tab = value;
  }

  isSelected(value: string) {
    return this.tab === value;
  }
}

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

  @Input('snapshots') snapshots: any[];

  public pieChartLabels: string[] = [
    'Reston',
    'Tampa',
    'New York'
  ];

  public pieChartData: number[] = [300, 500, 100];

  public pieChartType: string = 'pie';

  constructor() { }

  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }

}

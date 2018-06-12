import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-polar-area-chart',
  templateUrl: './polar-area-chart.component.html',
  styleUrls: ['./polar-area-chart.component.css']
})
export class PolarAreaChartComponent {

  public polarAreaChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail Sales',
    'Telesales',
    'Corporate Sales'
  ];

  public polarAreaChartData: number[] = [300, 500, 100, 40, 120];

  public polarAreaLegend: boolean = true;

  public polarAreaChartType: string = 'polarArea';

  constructor() { }

  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }

}

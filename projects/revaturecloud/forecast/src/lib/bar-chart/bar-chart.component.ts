import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  @Input('snapshots') snapshots: any[];

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels: string[];

  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[];

  constructor() {}

  ngOnInit() {
    this.barChartLabels = this.snapshots.map(snapshot => {
      return snapshot.date;
    });

    this.barChartData = [
      { data: this.snapshots.map(s => s.roomCount), label: 'Room Count' },
      { data: this.snapshots.map(s => s.userCount), label: 'User Count' }
    ];
  }

  public chartClicked(e: any): void {}

  public chartHovered(e: any): void {}

}

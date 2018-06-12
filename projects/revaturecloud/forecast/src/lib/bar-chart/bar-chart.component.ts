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

  public chartClicked(e: any): void {
    console.log(this.snapshots);
  }

  public chartHovered(e: any): void {}

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.random() * 100,
      56,
      Math.random() * 100,
      40
    ];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

}

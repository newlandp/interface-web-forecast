import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  @Input('restonSnapshots') restonSnapshots: any[];
  @Input('tampaSnapshots') tampaSnapshots: any[];
  @Input('newYorkSnapshots') newYorkSnapshots: any[];
  @Input('type') type: string;

  restonTotalRoomCount: number;
  tampaTotalRoomCount: number;
  newYorkTotalRoomCount: number;
  restonTotalUserCount: number;
  tampaTotalUserCount: number;
  newYorkTotalUserCount: number;

  public pieChartLabels: string[] = [
    'Reston',
    'Tampa',
    'New York'
  ];

  public pieChartData: number[];

  constructor() { }

  ngOnInit() {
    if(this.type === 'rooms') {
      this.restonTotalRoomCount = this.getTotalRooms(this.restonSnapshots);
      this.tampaTotalRoomCount = this.getTotalRooms(this.tampaSnapshots);
      this.newYorkTotalRoomCount = this.getTotalRooms(this.newYorkSnapshots);
      this.pieChartData = [
        this.restonTotalRoomCount,
        this.tampaTotalRoomCount,
        this.newYorkTotalRoomCount
      ];
    }

    if(this.type === 'users') {
      this.restonTotalUserCount = this.getTotalUsers(this.restonSnapshots);
      this.tampaTotalUserCount = this.getTotalUsers(this.tampaSnapshots);
      this.newYorkTotalUserCount = this.getTotalUsers(this.newYorkSnapshots);
      this.pieChartData = [
        this.restonTotalUserCount,
        this.tampaTotalUserCount,
        this.newYorkTotalUserCount
      ];
    }
  }

  getTotalUsers(snapshot) {
    return snapshot.reduce((total, snap) => {
      return total + snap.userCount;
    }, 0);
  }

  getTotalRooms(snapshot) {
    return snapshot.reduce((total, snap) => {
      return total + snap.roomOccupancyCount;
    }, 0);
  }

  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }

}

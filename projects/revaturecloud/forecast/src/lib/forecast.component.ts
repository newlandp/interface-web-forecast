import { ForecastService } from './forecast.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']

})

export class ForecastComponent implements OnInit {
  allSnapshots;
  restonSnapshots;
  tampaSnapshots;
  newYorkSnapshots;

  constructor(private forecastService: ForecastService) { }

  ngOnInit() {
    this.forecastService.getAllSnapshots().subscribe(
      (snapshots: any[]) => {
        this.allSnapshots = snapshots.filter(s => s.location === "All");
        this.restonSnapshots = snapshots.filter(s => s.location === "Reston");
        this.tampaSnapshots = snapshots.filter(s => s.location === "Tampa");
        this.newYorkSnapshots = snapshots.filter(s => s.location === "New York");
      }
    );

    // this.forecastService.getRestonSnapshotsTemp().subscribe(
    //   snapshots => this.restonSnapshots = snapshots
    // );

    // this.forecastService.getTampaSnapshotsTemp().subscribe(
    //   snapshots => this.tampaSnapshots = snapshots
    // );

    // this.forecastService.getNewYorkSnapshotsTemp().subscribe(
    //   snapshots => this.newYorkSnapshots = snapshots
    // );
  }
}

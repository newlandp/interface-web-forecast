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
    this.forecastService.getAllSnapshotsTemp().subscribe(
      snapshots => this.allSnapshots = snapshots
    );

    this.forecastService.getRestonSnapshotsTemp().subscribe(
      snapshots => this.restonSnapshots = snapshots
    );

    this.forecastService.getTampaSnapshotsTemp().subscribe(
      snapshots => this.tampaSnapshots = snapshots
    );

    this.forecastService.getNewYorkSnapshotsTemp().subscribe(
      snapshots => this.newYorkSnapshots = snapshots
    );
  }
}

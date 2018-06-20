import { locations, snapshotAll, snapshotNewYork, snapshotTampa, snapshotReston } from './temp-data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Observer } from 'rxjs';

@Injectable()
export class ForecastService {
  private readonly rootUrl: string = 'http://ec2-13-57-218-138.us-west-1.compute.amazonaws.com:9020/api/Forecast';

  constructor(private http: HttpClient) { }

  getAllBatches() {
    return this.http.get(`${this.rootUrl}/Batches`);
  }

  getAllRooms() {
    return this.http.get(`${this.rootUrl}/Rooms`);
  }

  getAllUsers() {
    return this.http.get(`${this.rootUrl}/Users`);
  }

  getAllLocations() {
    return this.http.get(`${this.rootUrl}/Locations`);
  }

  getAllLocationsTemp(): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      setTimeout(() => {
        observer.next(locations);
      }, 1000);
    });
  }

  // (GET) /Snapshots/{date:datetime}
  getAllSnapshots() {
    return this.http.get(`${this.rootUrl}/Snapshots`);
  }

  // (GET) /SnapshotsRange/{startDate:datetime}/{endDate:datetime}
  getAllSnapshotsRange(startDate: string, endDate: string) {
    return this.http.get(`${this.rootUrl}/Snapshots/${startDate}/${endDate}`);
  }

  // (GET) /SnapshotsByLocation/{date:datetime}/{location:alpha}
  getRestonSnapshots(date: string) {
    return this.http.get(`${this.rootUrl}/Snapshots/${date}/Reston`);
  }

  getTampaSnapshots(date: string) {
    return this.http.get(`${this.rootUrl}/Snapshots/${date}/Tampa`);
  }

  getNewYorkSnapshots(date: string) {
    return this.http.get(`${this.rootUrl}/Snapshots/${date}/New York`);
  }

  // (GET) /SnapshotsRangeByLocation/{startDate:datetime}/{endDate:datetime}/{location:alpha}
  getRestonSnapshotsRange(startDate: string, endDate: string) {
    return this.http.get(`${this.rootUrl}/Snapshots/${startDate}/${endDate}/Reston`);
  }

  getTampaSnapshotsRange(startDate: string, endDate: string) {
    return this.http.get(`${this.rootUrl}/Snapshots/${startDate}/${endDate}/Tampa`);
  }

  getNewYorkSnapshotsRange(startDate: string, endDate: string) {
    return this.http.get(`${this.rootUrl}/Snapshots/${startDate}/${endDate}/New York`);
  }

  // subject to different parameters depending on backend team

  getAllSnapshotsTemp() {
    return Observable.create((observer: Observer<any>) => {
      setTimeout(() => {
        observer.next(snapshotAll);
      }, 1000);
    });
  }

  getRestonSnapshotsTemp() {
    return Observable.create((observer: Observer<any>) => {
      setTimeout(() => {
        observer.next(snapshotReston);
      }, 1000);
    });
  }

  getTampaSnapshotsTemp() {
    return Observable.create((observer: Observer<any>) => {
      setTimeout(() => {
        observer.next(snapshotTampa);
      }, 1000);
    });
  }

  getNewYorkSnapshotsTemp() {
    return Observable.create((observer: Observer<any>) => {
      setTimeout(() => {
        observer.next(snapshotNewYork);
      }, 1000);
    });
  }

  getAllRoomsOccupancyAtDate(date: Intl.DateTimeFormat) {
    return this.http.get(`${this.rootUrl}/Rooms/${date}`);
  }

  getAllUsersAtDate(date: Intl.DateTimeFormat) {
    return this.http.get(`${this.rootUrl}/Users/${date}`)
  }
}

import { locations, snapshot } from './temp-data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Observer } from 'rxjs';

@Injectable()
export class ForecastService {
  private readonly rootUrl: string = 'root/api/Forecast';

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

  // subject to different parameters depending on backend team
  getSnapshots() {}

  getSnapshotsTemp() {
    return Observable.create((observer: Observer<any>) => {
      setTimeout(() => {
        observer.next(snapshot);
      }, 1000);
    });
  }

  getAllRoomsOccupancyAtDate(date: DateTimeFormat) {
    return this.http.get(`${this.rootUrl}/Rooms/${date}`);
  }

  getAllUsersAtDate(date: DateTimeFormat) {
    return this.http.get(`${this.rootUrl}/Users/${date}`)
  }
}

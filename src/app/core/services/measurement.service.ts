import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { baseURL } from './Constants';
import { Measurement } from '../models/Measurement';

@Injectable()
export class MeasurementService {

  constructor(private http: Http) { }

  getMeasurements(): Observable<Measurement[]> {
    return this.http.get(baseURL + 'measurements/')
      .map(res => res.json() || {});
  }

  getMeasurement(id: number): Observable<Measurement> {
    return this.http.get(baseURL + 'measurements/' + id)
      .map(res => res.json() || {});
  }

  saveMeasurement(measurement: Measurement): Observable<Measurement> {
    return measurement.id ?
      this.http.put(baseURL + 'measurements/', measurement).map(res => res.json() || {}) :
      this.http.post(baseURL + 'measurements/', measurement).map(res => res.json() || {});
  }

}

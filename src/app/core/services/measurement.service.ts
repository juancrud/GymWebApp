import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { baseURL } from './Constants';
import { Measurement } from '../models/Measurement';
import { HttpProcessorService } from './http-processor.service';

@Injectable()
export class MeasurementService {

  constructor(private http: Http, private httpProcessor: HttpProcessorService) { }

  getMeasurements(): Observable<Measurement[]> {
    return this.http.get(baseURL + 'measurements/')
      .map(res => this.httpProcessor.getData(res))
      .catch(error => this.httpProcessor.handleError(error));
  }

  getMeasurement(id: number): Observable<Measurement> {
    return this.http.get(baseURL + 'measurements/' + id)
      .map(res => this.httpProcessor.getData(res))
      .catch(error => this.httpProcessor.handleError(error));
  }

  saveMeasurement(measurement: Measurement): Observable<Measurement> {
    return measurement.id ?
      this.http.put(baseURL + 'measurements/', measurement)
        .map(res => this.httpProcessor.getData(res))
        .catch(error => this.httpProcessor.handleError(error)) :
      this.http.post(baseURL + 'measurements/', measurement)
        .map(res => this.httpProcessor.getData(res))
        .catch(error => this.httpProcessor.handleError(error));
  }

  deleteMeasurement(id: number): Observable<Measurement> {
    return this.http.delete(baseURL + 'measurements/' + id)
      .map(res => this.httpProcessor.getData(res))
      .catch(error => this.httpProcessor.handleError(error));
  }

}

import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { apiBaseURL } from './Constants';
import { Trainer } from '../models/Trainer';
import { HttpProcessorService } from './http-processor.service';

@Injectable()
export class TrainerService {
  
  constructor(private http: Http, private httpProcessor: HttpProcessorService) { }

  getTrainers(): Observable<Trainer[]> {
    return this.http.get(apiBaseURL + 'trainers/')
      .map(res => this.httpProcessor.getData(res))
      .catch(error => this.httpProcessor.handleError(error));
  }

  getTrainer(id: number): Observable<Trainer> {
    return this.http.get(apiBaseURL + 'trainers/' + id)
      .map(res => this.httpProcessor.getData(res))
      .catch(error => this.httpProcessor.handleError(error));
  }

  saveTrainer(trainer: Trainer): Observable<Trainer> {
    return trainer.id ?
      this.http.put(apiBaseURL + 'trainers/', trainer)
        .map(res => this.httpProcessor.getData(res))
        .catch(error => this.httpProcessor.handleError(error)) :
      this.http.post(apiBaseURL + 'trainers/', trainer)
        .map(res => this.httpProcessor.getData(res))
        .catch(error => this.httpProcessor.handleError(error));
  }

}

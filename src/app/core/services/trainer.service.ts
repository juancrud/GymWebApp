import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { baseURL } from './Constants';
import { Trainer } from '../models/Trainer';
import { HttpProcessorService } from './http-processor.service';

@Injectable()
export class TrainerService {
  
  constructor(private http: Http, private httpProcessor: HttpProcessorService) { }

  getTrainers(): Observable<Trainer[]> {
    return this.http.get(baseURL + 'trainers/').map(res => this.httpProcessor.getData(res));
  }

  getTrainer(id: number): Observable<Trainer> {
    return this.http.get(baseURL + 'trainers/' + id).map(res => this.httpProcessor.getData(res));
  }

  saveTrainer(trainer: Trainer): Observable<Trainer> {
    return trainer.id ?
      this.http.put(baseURL + 'trainers/', trainer).map(res => this.httpProcessor.getData(res)) :
      this.http.post(baseURL + 'trainers/', trainer).map(res => this.httpProcessor.getData(res));
  }

}

import { Injectable } from '@angular/core';
import { Http } from '../../../../node_modules/@angular/http';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import { Exercise } from '../models/Exercise';
import { apiBaseURL } from './Constants';
import { HttpProcessorService } from './http-processor.service';

@Injectable()
export class ExerciseService {

  constructor(private http: Http, private httpProcessor: HttpProcessorService) { }

  getExercises(): Observable<Exercise[]> {
    return this.http.get(apiBaseURL + 'exercises/')
      .map(res => this.httpProcessor.getData(res))
      .catch(error => this.httpProcessor.handleError(error));
  }

  getExercise(id: number): Observable<Exercise> {
    return this.http.get(apiBaseURL + 'exercises/' + id)
      .map(res => this.httpProcessor.getData(res))
      .catch(error => this.httpProcessor.handleError(error));
  }

  saveExercise(exercise: Exercise): Observable<Exercise> {
    return exercise.id ?
      this.http.put(apiBaseURL + 'exercises/', exercise)
        .map(res => this.httpProcessor.getData(res))
        .catch(error => this.httpProcessor.handleError(error)) :
      this.http.post(apiBaseURL + 'exercises/', exercise)
        .map(res => this.httpProcessor.getData(res))
        .catch(error => this.httpProcessor.handleError(error));
  }

}

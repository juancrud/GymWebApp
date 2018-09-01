import { Injectable } from '@angular/core';
import { Http } from '../../../../node_modules/@angular/http';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import { Exercise } from '../models/Exercise';
import { baseURL } from './Constants';
import { HttpProcessorService } from './http-processor.service';

@Injectable()
export class ExerciseService {

  constructor(private http: Http, private httpProcessor: HttpProcessorService) { }

  getExercises(): Observable<Exercise[]> {
    return this.http.get(baseURL + 'exercises/').map(res => this.httpProcessor.getData(res));
  }

  getExercise(id: number): Observable<Exercise> {
    return this.http.get(baseURL + 'exercises/' + id).map(res => this.httpProcessor.getData(res));
  }

  saveExercise(exercise: Exercise): Observable<Exercise> {
    return exercise.id ?
      this.http.put(baseURL + 'exercises/', exercise).map(res => this.httpProcessor.getData(res)) :
      this.http.post(baseURL + 'exercises/', exercise).map(res => this.httpProcessor.getData(res));
  }

}

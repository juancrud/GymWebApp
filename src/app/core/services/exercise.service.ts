import { Injectable } from '@angular/core';
import { Http } from '../../../../node_modules/@angular/http';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import { Exercise } from '../models/Exercise';
import { baseURL } from './Constants';

@Injectable()
export class ExerciseService {

  constructor(private http: Http) { }

  getExercises(): Observable<Exercise[]> {
    return this.http.get(baseURL + 'exercises/').map(res => res.json() || {});
  }

  getExercise(id: number): Observable<Exercise> {
    return this.http.get(baseURL + 'exercises/' + id).map(res => res.json() || {});
  }

  saveExercise(exercise: Exercise): Observable<Exercise> {
    return exercise.id ?
      this.http.put(baseURL + 'exercises/', exercise).map(res => res.json() || {}) :
      this.http.post(baseURL + 'exercises/', exercise).map(res => res.json() || {});
  }

}

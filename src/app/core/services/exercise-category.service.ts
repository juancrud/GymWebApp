import { Injectable } from '@angular/core';
import { Http } from '../../../../node_modules/@angular/http';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import { ExerciseCategory } from '../models/ExerciseCategory';
import { baseURL } from './Constants';

@Injectable()
export class ExerciseCategoryService {

  constructor(private http: Http) { }

  getExerciseCategories(): Observable<ExerciseCategory[]> {
    return this.http.get(baseURL + 'exerciseCategories/').map(res => res.json() || {});
  }

  getExerciseCategory(id: number): Observable<ExerciseCategory> {
    return this.http.get(baseURL + 'exerciseCategories/' + id).map(res => res.json() || {});
  }

  saveExerciseCategory(exerciseCategory: ExerciseCategory): Observable<ExerciseCategory> {
    return exerciseCategory.id ?
      this.http.put(baseURL + 'exerciseCategories/', exerciseCategory).map(res => res.json() || {}) :
      this.http.post(baseURL + 'exerciseCategories/', exerciseCategory).map(res => res.json() || {});
  }

}

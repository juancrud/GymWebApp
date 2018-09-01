import { Injectable } from '@angular/core';
import { Http } from '../../../../node_modules/@angular/http';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import { ExerciseCategory } from '../models/ExerciseCategory';
import { baseURL } from './Constants';
import { HttpProcessorService } from './http-processor.service';

@Injectable()
export class ExerciseCategoryService {

  constructor(private http: Http, private httpProcessor: HttpProcessorService) { }

  getExerciseCategories(): Observable<ExerciseCategory[]> {
    return this.http.get(baseURL + 'exerciseCategories/').map(res => this.httpProcessor.getData(res));
  }

  getExerciseCategory(id: number): Observable<ExerciseCategory> {
    return this.http.get(baseURL + 'exerciseCategories/' + id).map(res => this.httpProcessor.getData(res));
  }

  saveExerciseCategory(exerciseCategory: ExerciseCategory): Observable<ExerciseCategory> {
    return exerciseCategory.id ?
      this.http.put(baseURL + 'exerciseCategories/', exerciseCategory).map(res => this.httpProcessor.getData(res)) :
      this.http.post(baseURL + 'exerciseCategories/', exerciseCategory).map(res => this.httpProcessor.getData(res));
  }

}

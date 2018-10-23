import { Injectable } from '@angular/core';
import { Http } from '../../../../node_modules/@angular/http';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import { ExerciseCategory } from '../models/ExerciseCategory';
import { apiBaseURL } from './Constants';
import { HttpProcessorService } from './http-processor.service';

@Injectable()
export class ExerciseCategoryService {

  constructor(private http: Http, private httpProcessor: HttpProcessorService) { }

  getExerciseCategories(): Observable<ExerciseCategory[]> {
    return this.http.get(apiBaseURL + 'exerciseCategories/')
      .map(res => this.httpProcessor.getData(res))
      .catch(error => this.httpProcessor.handleError(error));
  }

  getExerciseCategory(id: number): Observable<ExerciseCategory> {
    return this.http.get(apiBaseURL + 'exerciseCategories/' + id)
      .map(res => this.httpProcessor.getData(res))
      .catch(error => this.httpProcessor.handleError(error));
  }

  saveExerciseCategory(exerciseCategory: ExerciseCategory): Observable<ExerciseCategory> {
    return exerciseCategory.id ?
      this.http.put(apiBaseURL + 'exerciseCategories/', exerciseCategory)
        .map(res => this.httpProcessor.getData(res))
        .catch(error => this.httpProcessor.handleError(error)) :
      this.http.post(apiBaseURL + 'exerciseCategories/', exerciseCategory)
        .map(res => this.httpProcessor.getData(res))
        .catch(error => this.httpProcessor.handleError(error));
  }

}

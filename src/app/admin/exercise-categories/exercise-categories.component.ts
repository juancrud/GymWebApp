import { Component, OnInit } from '@angular/core';
import { ExerciseCategory, ExerciseCategoryStatus } from '../../core/models/ExerciseCategory';
import { ExerciseCategoryService } from '../../core/services/exercise-category.service';
import { GridModel } from '../../core/models/GridModel';
import { MapperService } from '../../core/services/mapper.service';

@Component({
  selector: 'app-exercise-categories',
  templateUrl: './exercise-categories.component.html',
  styleUrls: ['./exercise-categories.component.scss']
})
export class ExerciseCategoriesComponent implements OnInit {
  exerciseCategories: ExerciseCategory[];
  error: Error;

  constructor(private exerciseCategoryService: ExerciseCategoryService, private mapperService: MapperService) { }

  ngOnInit() {
    this.exerciseCategoryService.getExerciseCategories()
      .subscribe(items => this.exerciseCategories = items, error => this.error = error);
  }

  deleteExerciseCategory(id: number) {
    let exerciseCategory = this.exerciseCategories.find(c => c.id === id);
    exerciseCategory.status = ExerciseCategoryStatus.Deleted;
    this.exerciseCategoryService.saveExerciseCategory(exerciseCategory)
      .subscribe(m => console.log('deleted'), error => this.error = error);
  }

  mapExerciseCategories(): GridModel[] {
    return this.exerciseCategories.map(x => this.mapperService.mapExercisesCategoriesToGridModel(x));
  }
}

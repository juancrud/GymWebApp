import { Component, OnInit } from '@angular/core';
import { ExerciseCategory, ExerciseCategoryStatus } from '../../core/models/ExerciseCategory';
import { ExerciseCategoryService } from '../../core/services/exercise-category.service';

@Component({
  selector: 'app-exercise-categories',
  templateUrl: './exercise-categories.component.html',
  styleUrls: ['./exercise-categories.component.scss']
})
export class ExerciseCategoriesComponent implements OnInit {
  exerciseCategories: ExerciseCategory[];

  constructor(private exerciseCategoryService: ExerciseCategoryService) { }

  ngOnInit() {
    this.exerciseCategoryService.getExerciseCategories()
      .subscribe(items => this.exerciseCategories = items);
  }

  deleteExerciseCategory(id: number) {
    let exerciseCategory = this.exerciseCategories.find(c => c.id === id);
    exerciseCategory.status = ExerciseCategoryStatus.Deleted;
    this.exerciseCategoryService.saveExerciseCategory(exerciseCategory)
      .subscribe(m => console.log('deleted'));
  }

}

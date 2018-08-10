import { Component, OnInit } from '@angular/core';
import { ExerciseCategory } from '../../core/models/ExerciseCategory';
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
    console.log('deleteExerciseCategory Not implemented');
    // let exerciseCategory = this.exerciseCategories.find(c => c.id === id);
    // customer.status = CustomerStatus.Deleted;
    // this.customerService.saveCustomer(customer)
    //   .subscribe(m => console.log('deleted'));
  }

}

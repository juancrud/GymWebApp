import { Component, OnInit } from '@angular/core';
import { ExerciseCategory } from '../../core/models/ExerciseCategory';
import { FormGroup, FormBuilder, Validators } from '../../../../node_modules/@angular/forms';
import { ExerciseCategoryService } from '../../core/services/exercise-category.service';
import { ActivatedRoute, Router, Params } from '../../../../node_modules/@angular/router';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import { Exercise } from '../../core/models/Exercise';

@Component({
  selector: 'app-exercise-category-save',
  templateUrl: './exercise-category-save.component.html',
  styleUrls: ['./exercise-category-save.component.scss']
})
export class ExerciseCategorySaveComponent implements OnInit {
  exerciseCategory: ExerciseCategory;
  exercises: Exercise[] = [];
  error: Error;
  
  form: FormGroup;
  formErrors = {
    'name': '',
  };
  validationMessages = {
    'name': {
      'required': 'Name is required.'
    }
  };

  constructor(
    private exerciseCategoryService: ExerciseCategoryService,
    private route: ActivatedRoute, 
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        var exerciseCategoryId = +params['id'];
        if (exerciseCategoryId){
          return this.exerciseCategoryService.getExerciseCategory(exerciseCategoryId);
        }
          
        return new Observable<ExerciseCategory>(o => {
          o.next(new ExerciseCategory());
          o.complete();
        });
      })
      .subscribe(exerciseCategory => this.exerciseCategory = exerciseCategory, error => this.error = error);
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]]
    });

    this.form.valueChanges.subscribe(data => this.onValueChanged());
    this.onValueChanged();
  };

  onValueChanged(data?: any) {
    if (!this.form) return;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = this.form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  };

  formSubmit(){
    this.exerciseCategoryService.saveExerciseCategory(this.exerciseCategory)
      .subscribe(m => this.router.navigateByUrl("/admin/exercises"), error => this.error = error);
  }

}

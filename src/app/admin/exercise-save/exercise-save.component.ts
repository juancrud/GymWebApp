import { Component, OnInit } from '@angular/core';
import { Exercise } from '../../core/models/Exercise';
import { FormGroup, FormBuilder, Validators } from '../../../../node_modules/@angular/forms';
import { ExerciseService } from '../../core/services/exercise.service';
import { ActivatedRoute, Router, Params } from '../../../../node_modules/@angular/router';
import { Observable } from '../../../../node_modules/rxjs/Observable';

@Component({
  selector: 'app-exercise-save',
  templateUrl: './exercise-save.component.html',
  styleUrls: ['./exercise-save.component.scss']
})
export class ExerciseSaveComponent implements OnInit {
  exercise: Exercise = new Exercise();

  form: FormGroup;
  formErrors = {
    'name': '',
    'description': '',
  };
  validationMessages = {
    'name': {
      'required': 'Name is required.'
    },
    'description': {
      'required': 'Description is required.'
    }
  };

  constructor(
    private exerciseService: ExerciseService,
    private route: ActivatedRoute, 
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        var exercise = +params['id'];
        if (exercise){
          return this.exerciseService.getExercise(exercise);
        }
          
        return new Observable<Exercise>(o => {
          o.next(new Exercise());
          o.complete();
        });
      })
      .subscribe(exercise => {
        this.exercise = exercise;
      });
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]]
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
    this.exerciseService.saveExercise(this.exercise)
      .subscribe(m => this.router.navigateByUrl("/admin/exercises"), e => console.log('error', e));
  }

}

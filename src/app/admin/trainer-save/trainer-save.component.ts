import { Component, OnInit } from '@angular/core';
import { Trainer } from '../../core/models/Trainer';
import { FormGroup, FormBuilder, Validators } from '../../../../node_modules/@angular/forms';
import { TrainerService } from '../../core/services/trainer.service';
import { ActivatedRoute, Router, Params } from '../../../../node_modules/@angular/router';
import { Observable } from '../../../../node_modules/rxjs/Observable';

@Component({
  selector: 'app-trainer-save',
  templateUrl: './trainer-save.component.html',
  styleUrls: ['./trainer-save.component.scss']
})
export class TrainerSaveComponent implements OnInit {
  trainer: Trainer = new Trainer();

  form: FormGroup;
  formErrors = {
    'documentId': '',
    'name': '',
    'gender': '',
    'birthDay': '',
    'address': '',
    'emailAddress': '',
    'phoneNumber': '',
    'status': ''
  };
  validationMessages = {
    'documentId': {
      'required': 'Document Id is required.'
    },
    'name': {
      'required': 'Name is required.'
    },
    'gender': {
      'required': 'Gender is required.'
    },
    'birthDay': {
      'required': 'Birth Day is required.'
    },
    'address': {
    },
    'emailAddress': {
      'email': 'Email Address format is incorrect.'
    },
    'phoneNumber': {
    },
    'status': {
      'required': 'Status is required.'
    }
  };

  constructor(
    private trainerService: TrainerService,
    private route: ActivatedRoute, 
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        var trainerId = +params['id'];
        if (trainerId){
          return this.trainerService.getTrainer(trainerId);
        }
          
        return new Observable<Trainer>(o => {
          o.next(new Trainer());
          o.complete();
        });
      })
      .subscribe(trainer => {
        this.trainer = trainer;
      });
  }

  createForm() {
    this.form = this.formBuilder.group({
      documentId: ['', [Validators.required]],
      name: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      birthDay: ['', [Validators.required]],
      address: ['', []],
      emailAddress: ['', [Validators.email]],
      phoneNumber: ['', []],
      status: ['', [Validators.required]]
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
          console.log('Error: ' + field + ' - ' + key);
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  };

  formSubmit(){
    this.trainerService.saveTrainer(this.trainer)
      .subscribe(m => this.router.navigateByUrl("/admin/trainers"), e => console.log('error', e));
  }

}

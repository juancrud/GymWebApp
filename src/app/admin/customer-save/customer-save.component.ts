import { Component, OnInit } from '@angular/core';
import { Customer, CustomerStatus } from '../../core/models/Customer';
import { FormGroup, FormBuilder, Validators } from '../../../../node_modules/@angular/forms';
import { CustomerService } from '../../core/services/customer.service';
import { ActivatedRoute, Router, Params } from '../../../../node_modules/@angular/router';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import { Gender } from '../../core/models/Gender';

@Component({
  selector: 'app-customer-save',
  templateUrl: './customer-save.component.html',
  styleUrls: ['./customer-save.component.scss']
})
export class CustomerSaveComponent implements OnInit {
  customer: Customer = new Customer();
  genders: Gender[] = [Gender.Male, Gender.Female];
  statuses: CustomerStatus[] = [CustomerStatus.Active, CustomerStatus.Inactive, CustomerStatus.Deleted];

  form: FormGroup;
  formErrors = {
    'documentId': '',
    'name': '',
    'gender': '',
    'birthDay': '',
    'address': '',
    'emailAddress': '',
    'phoneNumber': '',
    'height': '',
    'status': '',
    'photo': ''
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
    'height': {
      'required': 'Height is required.'
    },
    'status': {
      'required': 'Status is required.'
    },
    'photo': {

    }
  };

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute, 
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        var customerId = +params['id'];
        if (customerId){
          return this.customerService.getCustomer(customerId);
        }
          
        return new Observable<Customer>(o => {
          o.next(new Customer());
          o.complete();
        });
      })
      .subscribe(customer => {
        this.customer = customer;
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
      height: ['', [Validators.required]],
      status: ['', [Validators.required]],
      photo: ['', []]
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
    this.customerService.saveCustomer(this.customer)
      .subscribe(m => this.router.navigateByUrl("/admin/customers"), e => console.log('error', e));
  }

}

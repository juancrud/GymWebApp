import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '../../../../node_modules/@angular/router';
import 'rxjs/add/operator/switchMap';

import { CustomerService } from '../../core/services/customer.service';
import { Customer } from '../../core/models/Customer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {
  customerId: number;
  customer: Customer;

  constructor(private customerService: CustomerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        this.customerId = +params['id'];
        return this.customerService.getCustomer(this.customerId);
      })
      .subscribe(customer => {
        this.customer = customer;
      });
  }

}

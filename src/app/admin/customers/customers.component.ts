import { Component, OnInit } from '@angular/core';
import { Customer } from '../../core/models/Customer';
import { CustomerService } from '../../core/services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomers()
      .subscribe(customers => this.customers = customers);
  }

  deleteCustomer(id: number) {
    // this.customerService.deleteCustomer(id)
    //   .subscribe(m => this.customers.splice(this.customers.indexOf(m), 1));
  }

}

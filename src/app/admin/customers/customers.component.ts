import { Component, OnInit } from '@angular/core';
import { Customer, CustomerStatus } from '../../core/models/Customer';
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
    let customer = this.customers.find(c => c.id === id);
    customer.status = CustomerStatus.Deleted;
    this.customerService.saveCustomer(customer)
      .subscribe(m => console.log('deleted'));
  }

}

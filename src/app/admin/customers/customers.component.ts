import { Component, OnInit } from '@angular/core';
import { Customer, CustomerStatus } from '../../core/models/Customer';
import { CustomerService } from '../../core/services/customer.service';
import { GridModel } from '../../core/models/GridModel';
import { MapperService } from '../../core/services/mapper.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];
  error: Error;

  constructor(private customerService: CustomerService, private mapperService: MapperService) { }

  ngOnInit() {
    this.customerService.getCustomers()
      .subscribe(customers => this.customers = customers, error => this.error = error);
  }

  deleteCustomer(id: number) {
    let customer = this.customers.find(c => c.id === id);
    customer.status = CustomerStatus.Deleted;
    this.customerService.saveCustomer(customer)
      .subscribe(m => console.log('deleted'), error => this.error = error);
  }

  mapCustomers(): GridModel[] {
    return this.customers.map(x => this.mapperService.mapCustomerToGridModel(x))
  }

}

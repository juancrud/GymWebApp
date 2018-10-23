import { Component, OnInit } from '@angular/core';
import { Customer, CustomerStatus } from '../../core/models/Customer';
import { CustomerService } from '../../core/services/customer.service';
import { Mapper } from '../../core/mappers/Mapper';
import { GridModel } from '../../core/models/GridModel';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];
  error: Error;

  constructor(private customerService: CustomerService, private mapper: Mapper) { }

  ngOnInit() {
    this.customerService.getCustomers()
      .subscribe(customers => this.customers = customers, error => this.error = error);
  }

  mapCustomers(): GridModel[] {
    return this.customers.map(x => this.mapper.mapCustomerToGridModel(x))
  }
}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { baseURL } from './Constants';
import { Customer } from '../models/Customer';

@Injectable()
export class CustomersService {

  constructor(private http: Http) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get(baseURL + 'customers/')
      .map(res => res.json() || {});
  }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get(baseURL + 'customers/' + id)
      .map(res => res.json() || {});
  }

}

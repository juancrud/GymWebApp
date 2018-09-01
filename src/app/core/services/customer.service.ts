import { Injectable } from '@angular/core';
import { Http } from '../../../../node_modules/@angular/http';
import { Customer } from '../models/Customer';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import { baseURL } from './Constants';
import { HttpProcessorService } from './http-processor.service';

@Injectable()
export class CustomerService {

  constructor(private http: Http, private httpProcessor: HttpProcessorService) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get(baseURL + 'customers/').map(res => this.httpProcessor.getData(res));
  }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get(baseURL + 'customers/' + id).map(res => this.httpProcessor.getData(res));
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return customer.id ?
      this.http.put(baseURL + 'customers/', customer).map(res => this.httpProcessor.getData(res)) :
      this.http.post(baseURL + 'customers/', customer).map(res => this.httpProcessor.getData(res));
  }

}

import { Injectable } from '@angular/core';
import { Http } from '../../../../node_modules/@angular/http';
import { Customer } from '../models/Customer';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import { apiBaseURL } from './Constants';
import { HttpProcessorService } from './http-processor.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CustomerService {

  constructor(private http: Http, private httpProcessor: HttpProcessorService) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get(apiBaseURL + 'customers/')
      .map(res => this.httpProcessor.getData(res))
      .catch(error => this.httpProcessor.handleError(error));
  }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get(apiBaseURL + 'customers/' + id)
      .map(res => this.httpProcessor.getData(res))
      .catch(error => this.httpProcessor.handleError(error));
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return customer.id ?
      this.http.put(apiBaseURL + 'customers/', customer)
        .map(res => this.httpProcessor.getData(res))
        .catch(error => this.httpProcessor.handleError(error)) :
      this.http.post(apiBaseURL + 'customers/', customer)
        .map(res => this.httpProcessor.getData(res))
        .catch(error => this.httpProcessor.handleError(error));
  }

}

import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Error } from '../models/Error';

@Injectable()
export class HttpProcessorService {

  constructor() { }

  public getData(res: Response) {
    let body = res.json();
    return body || {};
  }

  public getError(err) {
    let error = err.json();
    return error || {}
  }

  public handleError(response: Response | any) {
    let serviceError: Error;
    
    if (response instanceof Response) {
      const jsonResponse = response.json() || '';
      if (jsonResponse.message){
        serviceError = jsonResponse;
      }
    }

    serviceError = serviceError || {
      status: response.status,
      error: "HTTP error",
      message: response.statusText || "Unknow error when calling HTTP service.",
      path: response.url,
      timestamp: new Date()
    };
    
    return Observable.throw(serviceError);
  }

}

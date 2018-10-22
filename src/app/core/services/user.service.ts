import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpProcessorService } from './http-processor.service';
import { Observable } from 'rxjs/Observable';
import { baseURL } from './Constants';
import { User } from '../models/User';

@Injectable()
export class UserService {

  constructor(private http: Http, private httpProcessor: HttpProcessorService) { }

  getUserByIdentityId(identityId: string): Observable<User> {
    return this.http.get(baseURL + 'users/getByIdentityId?identityId=' + encodeURIComponent(identityId))
      .map(res => this.httpProcessor.getData(res))
      .catch(error => this.httpProcessor.handleError(error));
  }
}

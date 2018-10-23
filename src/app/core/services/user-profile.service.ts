import { Injectable } from '@angular/core';
import { HttpProcessorService } from './http-processor.service';
import { Http } from '@angular/http';
import { UserProfile } from '../models/UserProfile';
import { Observable } from 'rxjs/Observable';
import { baseURL } from './Constants';

@Injectable()
export class UserProfileService {

  constructor(private http: Http, private httpProcessor: HttpProcessorService) { }

  getUserByEmailAddress(emailAddress: string): Observable<UserProfile> {
    return this.http.get(baseURL + 'userProfiles/getByEmailAddress/' + encodeURIComponent(emailAddress))
      .map(res => this.httpProcessor.getData(res))
      .catch(error => this.httpProcessor.handleError(error));
  }

}

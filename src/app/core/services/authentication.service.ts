import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';
import { UserProfile } from '../models/UserProfile';
import { UserService } from './user.service';
import { UserType } from '../models/User';
import { UserProfileService } from './user-profile.service';
import { auth0CallbackUrl, auth0ClientId, auth0Domain } from './Constants';

@Injectable()
export class AuthenticationService {
  auth0 = new auth0.WebAuth({
    clientID: auth0ClientId,
    domain: auth0Domain,
    responseType: 'token id_token',
    redirectUri: auth0CallbackUrl,
    scope: 'openid profile'
  });

  auth0Profile: any;
  userProfile: UserProfile;

  constructor(private router: Router, private userService: UserService, private userProfileService: UserProfileService) { }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.auth0Profile = authResult.idTokenPayload;
        this.redirectToModule();
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }

  public async getUserProfile(auth0Profile: auth0.Auth0UserProfile) : Promise<UserProfile> {
    let userProfile = await this.userProfileService.getUserByEmailAddress(auth0Profile.name).toPromise();
    userProfile.identityId = auth0Profile.sub;
    userProfile.pictureUrl = auth0Profile.picture;
    userProfile.name = '';
    return userProfile;
  }

  private redirectToModule(): void {
    const self = this;
    this.getProfile((err, auth0Profile) => {
      this.getUserProfile(auth0Profile).then(userProfile => {
        self.userProfile = userProfile;
        switch(userProfile.type) {
          case UserType.Administrator: 
            self.router.navigate(['/admin']);
            break;
          case UserType.Trainer: 
            self.router.navigate(['/trainer']);
            break;
          case UserType.Customer: 
            self.router.navigate(['/customer']);
            break;
          default: 
            self.router.navigate(['/home']);
            break;
        }
      });
    });
  };

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }

  public getProfile(callback): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access Token must exist to fetch profile');
    }

    const self = this;
    this.auth0.client.userInfo(accessToken, (err, auth0Profile) => {
      if (auth0Profile) {
        self.auth0Profile = auth0Profile;
      }
      callback(err, auth0Profile);
    });
  }

}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';
import { UserProfile } from '../models/UserProfile';
import { UserService } from './user.service';
import { UserType } from '../models/User';

@Injectable()
export class AuthenticationService {
  auth0 = new auth0.WebAuth({
    clientID: 'lH46jA1MPlkXOPswIh3fNSEsclM6Am4b',
    domain: 'juancrud.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid profile'
  });

  auth0Profile: any;
  userProfile: UserProfile;

  constructor(private router: Router, private userService: UserService) { }

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

  public async getUserProfile(auth0Profile: auth0.Auth0UserProfile): Promise<UserProfile> {
    var user = await this.userService.getUserByIdentityId(auth0Profile.sub).toPromise();
    return {
      id: user.id,
      identityId: user.identityId,
      userType: user.type,
      name: auth0Profile.name,
      pictureUrl: auth0Profile.picture,
      username: auth0Profile.username
    };
  }

  private redirectToModule(): void {
    const self = this;
    this.getProfile((err, auth0Profile) => {
      let identityId = auth0Profile.sub;
      this.userService.getUserByIdentityId(identityId).subscribe(user => {
        console.log(user);
        switch(user.type){
          case UserType.Administrator:
            self.router.navigate(['/admin']);
            break;
          case UserType.Trainer:
            self.router.navigate(['/trainer']);
            break;
          case UserType.Customer:
          self.router.navigate(['/customer']);
            break;
        }
      })
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

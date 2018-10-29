import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { UserProfile } from '../models/UserProfile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userProfile: UserProfile;

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.userProfile = this.auth.userProfile;
    }
    else {
      this.auth.getUserProfile(this.auth.auth0Profile).then(x => this.userProfile = x);
    }
  }

}

import { Component } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  Profile : any;
  Repos: any;
  constructor(private profileService: ApiService){
    this.profileService.getUser("").subscribe(profile => {
      console.log(profile);
      this.Profile = profile;
    })

    this.profileService.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.Repos = repos;
    })
  }
}

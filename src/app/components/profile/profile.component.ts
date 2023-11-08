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
  username: string="";
  userNameFlag:boolean = false;
  loader:boolean = true;
  p:number = 1;
  itemsPerPage: number = 10;
  totalProduct: any = [10,20,50,100];

  constructor(private profileService: ApiService){
    
  }
  
  findProfile(){
    if(this.username===""){
      this.userNameFlag=false;
    }
    else{
      this.userNameFlag=true;
    }
    this.profileService.updateProfile(this.username);
    this.profileService.getUser("").subscribe(profile => {
      console.log(profile);
      this.Profile = profile;
      this.loader=false;
    })

    this.profileService.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.Repos = repos;
    })
  }
  onChangeSize(event:any):void{
    this.itemsPerPage = event.target.value;
    this.p=1;

  }
}

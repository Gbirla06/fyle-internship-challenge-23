import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private username:string;
  constructor(
    private httpClient: HttpClient
  ) { 
    this.username="gbirla06";
  }

  getUser(githubUsername: string) {
    return this.httpClient.get(`https://api.github.com/users/${this.username}`);
  }

  getUserRepos(){
    return this.httpClient.get(`https://api.github.com/users/${this.username}/repos`);
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
}

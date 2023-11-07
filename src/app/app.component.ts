import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  inputValue:string="";
  
  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.apiService.getUser('johnpapa').subscribe(console.log);
  }

  addItem(){
    // if(this.inputValue!==""){
    //   const xhr = new XMLHttpRequest();
    //   let str = "https://api.github.com/users/"+this.inputValue;
    //   xhr.open("GET", str);
    //   xhr.send();
    //   xhr.responseType = "json";
    //   xhr.onload = () => {
    //     if (xhr.readyState == 4 && xhr.status == 200) {
    //       console.log(xhr.response);
    //     } else {
    //       console.log(`Error: ${xhr.status}`);
    //     }
    //   };
    // }
    this.inputValue="";
  }
}

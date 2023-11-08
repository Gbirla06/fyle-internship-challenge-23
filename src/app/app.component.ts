import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // username:string="";
  Posts:any;
  page:number=1;
  count:number=0;
  tableSize:number= 10;
  tableSizes: any =[5,10,20,40,100];
  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.apiService.getUser('johnpapa').subscribe();
  }

  // onTableDataChange(event:any):void {
  //   this.tableSize = event.target.value;
  //   this.page = 1;
  //   this.
  // }
}

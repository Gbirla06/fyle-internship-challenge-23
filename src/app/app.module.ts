import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ApiService} from './services/api.service'
import {NgxPaginationModule} from 'ngx-pagination'
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

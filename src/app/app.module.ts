import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SmartboardComponent } from './smartboard/smartboard.component';
import { AppRoutingModule } from './app-routing.module';
import {TaskService } from './task.service';
import { PendingComponent } from './pending/pending.component';
import { FinishedComponent } from './finished/finished.component';

import {HttpClientModule,HttpClient} from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { TaskdetailComponent } from './taskdetail/taskdetail.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SmartboardComponent,
    PendingComponent,
    FinishedComponent,
    TaskdetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,InMemoryWebApiModule.forRoot(

    InMemoryDataService,{dataEncapsulation:false}),
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }

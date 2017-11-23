import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import {SmartboardComponent} from './smartboard/smartboard.component';
import{PendingComponent} from './pending/pending.component';
import {FinishedComponent} from './finished/finished.component';
import {TaskdetailComponent} from './taskdetail/taskdetail.component';
const routes:Routes=[
	{path:'',redirectTo:'/smartboard',pathMatch:'full'},
	{path:'smartboard',component:SmartboardComponent},
  {path:'pendingtasks',component:PendingComponent},
  {path:'finishedtasks',component:FinishedComponent},
  {path:'detail/:id',component:TaskdetailComponent}

];
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[
  	RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import {TaskService } from '../task.service';
import {Task} from '../task';
@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {

  constructor(private taskService:TaskService) { }
  pendingTasks:Task[]=[];
  ngOnInit() {
  	this.getPendingTasks();
  }

  getPendingTasks():void{

  this.taskService.getPendingTasks().subscribe(pendingTasks=>this.pendingTasks=pendingTasks);
  }

}

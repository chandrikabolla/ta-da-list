import { Component, OnInit } from '@angular/core';
import {Task} from '../task';
import {TaskService } from '../task.service';
@Component({
  selector: 'app-finished',
  templateUrl: './finished.component.html',
  styleUrls: ['./finished.component.css']
})
export class FinishedComponent implements OnInit {
	finishedTasks: Task[]=[];
  constructor(private taskService:TaskService) { }

  ngOnInit() {
  this.getFinishedTasks();

  }
  getFinishedTasks():void{
 this.taskService.getFinishedTasks().subscribe(finishedTasks=>this.finishedTasks=finishedTasks);
  }

}

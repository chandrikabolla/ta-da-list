import { Component, OnInit } from '@angular/core';
import {Task} from '../task';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-smartboard',
  templateUrl: './smartboard.component.html',
  styleUrls: ['./smartboard.component.css']
})
export class SmartboardComponent implements OnInit {
tasks:Task[]=[];
  constructor(private taskService:TaskService) { }

  ngOnInit() {
  this.getTasks();
  }
  getTasks():void{
  this.taskService.getTasks().subscribe(tasks=>this.tasks=tasks);
  }
  getColorOfDiv(done: boolean)
  {
    if(done)
    {
    return "green";
    }
    else{
    return "yellow";
    }
  }

}

import { Component, OnInit,Input,ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Task} from '../task';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-taskdetail',
  templateUrl: './taskdetail.component.html',
  styleUrls: ['./taskdetail.component.css']
})
export class TaskdetailComponent implements OnInit {
@Input() task:Task;
  constructor(
  private route: ActivatedRoute,
  private taskService: TaskService,
  private location: Location
  ) { }

  ngOnInit() {
  this.getTask();
  }
  getTask():void{

  const id=+this.route.snapshot.paramMap.get('id');
  this.taskService.getTask(id).subscribe(task=>this.task=task);
  }
  goBack(): void {
  this.location.back();
}
save(): void {
   this.taskService.updateTask(this.task)
     .subscribe(() => this.goBack());
 }

}

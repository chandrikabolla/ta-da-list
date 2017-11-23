import { Injectable } from '@angular/core';
import {Task} from './task';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class TaskService {
  private tasksUrl='api/tasks';
  private tasksListed:Task[]=[];
  constructor(private http:HttpClient) { 
  

  }

  getTasks():Observable<Task[]>{
  	return this.http.get<Task[]>(this.tasksUrl)
    .pipe(
      catchError(this.handleError('getTasks',[]))
    );

  }
  getPendingTasks():Observable<Task[]>{
  var pendingTasks:Task[]=[];
  
  this.getTasks().subscribe(tasksListed=>this.tasksListed=tasksListed);
  for(var i=0;i<this.tasksListed.length;i++)
  {
  	
      if(this.tasksListed[i].done===false)
      {
      pendingTasks.push(this.tasksListed[i]);
      
      }
  }
  return of(pendingTasks);
  }
  getFinishedTasks():Observable<Task[]>{

this.getTasks().subscribe(tasksListed=>this.tasksListed=tasksListed);
    var finishedTasks:Task[]=[];
    for(var i=0;i<this.tasksListed.length;i++)
    {
        if(this.tasksListed[i].done===true)
        {
        finishedTasks.push(this.tasksListed[i]);
        }
    }
    return of(finishedTasks);
  }

  getTask(id:number):Observable<Task>{
  const url=`${this.tasksUrl}/${id}`;

 return this.http.get<Task>(url).pipe(
      catchError(this.handleError<Task>(`getTask id=${id}`))
 );
  }

  /** PUT: update the task on the server */
updateTask (task: Task): Observable<any> {

  return this.http.put(this.tasksUrl, JSON.stringify(task), httpOptions).pipe(
    
    catchError(this.handleError<Task>('updateTask'))
  );
  
    

}

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    //this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}

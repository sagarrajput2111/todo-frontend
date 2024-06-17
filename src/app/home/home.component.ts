import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {


    //rendering all pending tasks
    this.apiService.fetchAllPendingTasks().subscribe({
      next: (response: any) => {
        console.log(response);
        this.tasksData = response.allTasks;
        console.log(this.tasksData)


      },
      error: (error) => {
        console.log(error);
      }
    })

    //rendering all completed tasks
    this.apiService.fetchAllCompletedTask().subscribe({
      next: (response: any) => {
        console.log(response);
        this.completedTaskData = response.allTasks;
        console.log(this.completedTaskData)


      },
      error: (error) => {
        console.log(error);
      }
    })



    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.


  }
  id: number = 2;
  // {'id':'1','taskName':'Complete To Do App'}
  tasksData: any[] = [];
  completedTaskData: any[] = [];
  task: string = "";
  addTask() {
    console.log("add button called");
    console.log(this.task);
    if (this.task != "") {

      let id;
      this.apiService.addToPendingTask(this.task).subscribe({
        next: (response: any) => {
          id = response.id;
        },
        error: (err: any) => {
          console.log("error while adding to pending task " + err);
        }

      });
      this.tasksData.push({ 'id': this.id, 'task': this.task });
      this.id++;
      this.task = "";

    }
  }

  completeTask(id: string) {


    //first delete from pending task
    this.apiService.removeFromPendingtask({ "id": id }).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err: any) => {
        console.log("error while delete task from pending task" + err);
      }
    })

    const obj = this.tasksData.filter(item => item.id == id)[0];
    this.tasksData = this.tasksData.filter(item => item.id != id);

    this.apiService.addToCompletedTask({ "task": obj.task }).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err: any) => {
        console.log("error while delete task from pending task" + err);
      }
    });

    // console.log(obj);
    this.completedTaskData.push(obj);

  }


  clearCompletedTasks()
{
  this.apiService.clearAllCompletedTasks().subscribe({next:(response)=>
    {
      console.log(response);
    },
    error:(err)=>
      {
        console.log(err);
      }
  })

  this.completedTaskData=[];

  
}


}

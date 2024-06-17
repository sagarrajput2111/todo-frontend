import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000'; // Example API URL

  constructor(private http: HttpClient) { }
  // callApi():Observable<any[]>{
  //   return this.http.get<any[]>(this.apiUrl);


  // }

  fetchAllPendingTasks():Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/all-pending-tasks`);
  }

  fetchAllCompletedTask():Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/all-completed-tasks`)
  }



  addToPendingTask(task:string):Observable<any[]>{
  
    return this.http.post<any[]>(`${this.apiUrl}/add-pending-tasks`,{"task":task});


  }

  removeFromPendingtask(obj:any):Observable<any[]>{
    return this.http.post<any[]>(`${this.apiUrl}/complete-task`,obj);
  }

  addToCompletedTask(obj:any):Observable<any[]>{
    return this.http.post<any[]>(`${this.apiUrl}/add-completed-tasks`,obj)
  }


  clearAllCompletedTasks():Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/clear-all`)
  }

  // Example GET request
//   getPosts(): Observable<any[]> {
//     return this.http.get<any[]>(`${this.apiUrl}/posts`);
//   }

// //   // Example POST request
//   createPost(postData: any): Observable<any> {
//     return this.http.post<any>(`${this.apiUrl}/posts`, postData);
//   }

}

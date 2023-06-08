import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {               

  readonly APIUrl= "http://localhost:5078/api/Project_Info/addProjectInfo";


  constructor(private http:HttpClient, private router:Router) { }

  addInfo(value:any){
    return this.http.post(this.APIUrl,value)
    // http://localhost:5078/api/Project_Info/addProjectInfo
  }
}

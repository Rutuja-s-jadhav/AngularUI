import { Injectable, reflectComponentType } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


//import{GetAllEmployeeResponse} from '../Models/api-models/getallstudentresponse.models'

@Injectable({
  providedIn: 'root',
})
export class loginService {

  constructor(private httpClient: HttpClient) {}
  currentUser: BehaviorSubject<any> = new BehaviorSubject(null);
 
  baseApiUrl = 'http://localhost:5078/api/';

  //constructor(private httpClient: HttpClient) {}


  SignUpUser(user: any) {
    return this.httpClient.post(
      this.baseApiUrl + 'Login/SignUp',
      {
        LoginId: user[0],
        Name: user[1],
        EmailId: user[2],
        Password: user[3],
      },
      {
        responseType: 'text',
      }
    );
  }
  login(model: any){
     return this.httpClient.post (this.baseApiUrl + 'Login/LoginAsync',model);
     
  }
//   loginUser(loginInfo:Array<String>){

//     return this.httpClient.post(

//       this.baseApiUrl + 'Login/LoginAsync',

//       {
//         EmailId: loginInfo[0],
//         Password: loginInfo[1]

//       },
//       {
//         responseType: 'text',
//       }

//       );
// }

}
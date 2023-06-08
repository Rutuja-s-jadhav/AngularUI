import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';

// import { environment } from 'src/environments/environment.development';




@Injectable({

  providedIn: 'root'

})

export class UserDetailsService {




  private isLoggedIn = new BehaviorSubject<boolean>(false);




  public isLoggedIn$ = this.isLoggedIn.asObservable();

  // baseApiUrl: string = environment.baseApiUrl;

  constructor(private httpClient: HttpClient) {}




  loggedIn() {

    return !!localStorage.getItem('token');

  }

  login(model: any) {

    return this.httpClient.post('http://localhost:4200/api/Login/Login',null);

  }
}

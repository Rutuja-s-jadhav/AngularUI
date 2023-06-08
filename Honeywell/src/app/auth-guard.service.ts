import { Injectable } from '@angular/core';

import {

  ActivatedRouteSnapshot,

  CanActivate,

  Router,

  RouterStateSnapshot,

} from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';

import { UserDetailsService } from './user-details.service';




@Injectable({

  providedIn: 'root',

})

export class AuthGuardService implements CanActivate {
  JwtHelperService: any;

  constructor(

    private userdetailservice: UserDetailsService,

    private router: Router,

  ) {}




  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const token = localStorage.getItem('token');




    if (token && !this.JwtHelperService.isTokenExpired(token)) {

      return true;

    }




    if (this.userdetailservice.loggedIn()) {

      return true;

    } else {

      this.router.navigate(['']);

      return false;

    }

  }

}
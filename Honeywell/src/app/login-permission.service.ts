
import { Injectable } from '@angular/core';

import {

  ActivatedRouteSnapshot,

  CanActivate,

  Router,

  RouterStateSnapshot,

  UrlTree,

} from '@angular/router';

import { Observable } from 'rxjs';

import Swal from 'sweetalert2';

import { Location } from '@angular/common';




@Injectable({

  providedIn: 'root',

})

export class LoginPermissionGuard implements CanActivate {

  constructor(private router: Router, private location: Location) {}




  canActivate(

    route: ActivatedRouteSnapshot,

    state: RouterStateSnapshot

  ):

    | Observable<boolean | UrlTree>

    | Promise<boolean | UrlTree>

    | boolean

    | UrlTree {

    const isLoggedIn = localStorage.getItem('token') ? true : false;

    const role = localStorage.getItem('role')?.replaceAll('"', '');

    if (isLoggedIn) {

      Swal.fire({

        icon: 'warning',

        title: 'Already Logged In',

      }).then((okay) => {

        if (okay) {

          if (role == 'user') {

            this.router.navigate(['app-user']);

          }

        }

      });

    }

    return !isLoggedIn;

  }

}
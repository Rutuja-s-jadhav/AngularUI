import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { loginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 // model: any = {};
  responsedata: any;
  Isloggedin = false;
  isUserValid = false;
  

  //isUserValid: boolean | undefined;
  hide = true;
  floatLabelControl = new FormControl('auto' as FloatLabelType);

  constructor(
    private loginservice: loginService,
    private _router: Router
    // private emailservice: ResetPasswordService
  ) { }

  ngOnInit(): void { }

  loginForm:FormGroup = new FormGroup({
      emailId: new FormControl('', [Validators.required,Validators.email]),
       password: new FormControl('', [
         Validators.required,
        // Validators.minLength(6),
         //Validators.maxLength(15),


        ])
   
  });



  // loginUser() {
  //   this.loginservice.login(this.loginForm.value).subscribe(res => {

  //     if (res == 'Failure'){

  //       this.isUserValid = false;

  //       alert('Login Unsuccessful');

  //     } else {

  //       this.isUserValid = true;
  //     }
  //   });
  // }
  // loginUser(){
  //   this.loginservice.loginUser([this.loginForm.value.emailId, this.loginForm.value.password])

  //   .subscribe(res => {

  //    if (res == 'Failure'){

  //      this.isUserValid = false;

  //      alert('Login UnSuccessful');

  //    } 
  //    else if(res == 'Success')
  //    {
  //      this.isUserValid = true;

  //      this.loginservice.setToken(res);
  //     alert('Login successful');

  //     // this._router.navigateByUrl('/home')

  //    }

  //   });

  //}
  loginUser() {
    this.loginservice.login(this.loginForm.value).subscribe({
      next: (response) => {
        console.log(response);
        if (response != null) {
          this.responsedata = response;
          localStorage.setItem('token', this.responsedata.result);
          localStorage.setItem(
            'email',
            JSON.stringify(this.loginForm.value.emailId)
          );
        }
        this.Isloggedin = true;
        // alert('Login successful');
          this._router.navigateByUrl('/project-info');
      }
    });
  }



  get EmailId(): FormControl {
    return this.loginForm.get('emailId') as FormControl;
  }
  get Password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
}


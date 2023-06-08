import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BackendService } from '../backend.service';
@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {

  formData: any={
    measurementType:'',
    projectName:'',
    projectNumber:0,
    preparedBy:''
    
  }
  constructor(private service : BackendService, private router : Router) {
    
  }
  ngOnInit(): void {    
  }

  sendData() {
    
    console.log(this.formData)
    this.service.addInfo(this.formData).subscribe(
      (response)=>{
        console.log(response);
      },
      (error)=>{
        console.log(error);
        this.router.navigate(['/equipment-main']);
      }
     )

  }

}

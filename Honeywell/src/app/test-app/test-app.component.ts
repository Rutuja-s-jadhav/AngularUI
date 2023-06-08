import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, NgForm } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SpecOption } from '../models/spec-option';
import { SpecService } from '../spec-service.service';


@Component({
  selector: 'app-test-app',
  templateUrl: './test-app.component.html',
  styleUrls: ['./test-app.component.css']
})
export class TestAppComponent {
  spec_option:SpecOption[]=[];
  displayedColumns: string[] = ['status', 'questions'];
  dataSource:MatTableDataSource<SpecOption>=new MatTableDataSource<SpecOption>();
  @ViewChild(MatPaginator) matPaginator!:MatPaginator;

  constructor(private specservice: SpecService, private _router: Router) {

  }
  ngOnInit() {

  }
  addForms = new FormGroup({
    questions : new FormControl(),
    status: new FormControl()
  });

  SaveData(){

    console.log(this.addForms.value);
    this.specservice.saveFormData(this.addForms.value).subscribe((result)=>{
      // console.log(result);
      Swal.fire({
        icon:'success',
        title: '',
        text: 'Submitted'
      })
      // this._router.navigate(['app-employees'])
    });
  }

}

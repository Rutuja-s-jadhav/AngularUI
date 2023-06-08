import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SpecOption } from '../models/spec-option';
import { SpecService } from '../spec-service.service';



@Component({
  selector: 'app-spec-option',
  templateUrl: './spec-option.component.html',
  styleUrls: ['./spec-option.component.css']
})
export class SpecOptionComponent {
  spec_option:SpecOption[]=[];
  displayedColumns: string[] = ['status', 'questions'];
  dataSource:MatTableDataSource<SpecOption>=new MatTableDataSource<SpecOption>();
  @ViewChild(MatPaginator) matPaginator!:MatPaginator;

  constructor(private specservice: SpecService, private _router: Router){
}

  ngOnInit(): void{
  this.specservice.getSpec().subscribe((successResponse)=>{
    this.spec_option=successResponse;
    this.dataSource=new MatTableDataSource<SpecOption>(this.spec_option);
    //window.location.reload();
    this.addForms.controls.questions.setValue;
  },
  (errorResponse)=>{
    console.log(errorResponse);

  }
  );
}

addForms = new FormGroup({
  id: new FormControl(0),
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

changeStatus(id: any, st: any) {

  this.specservice.editSpec(id,st)
    .subscribe((successResponse: any) => {
      console.log(st);
      this.spec_option = successResponse;
      this._router.navigateByUrl('/preview');

      // alert('Request Is ' + status);
    });
}
}


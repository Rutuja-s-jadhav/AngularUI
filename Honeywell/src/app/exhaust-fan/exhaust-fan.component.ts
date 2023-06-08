import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-exhaust-fan',
  templateUrl: './exhaust-fan.component.html',
  styleUrls: ['./exhaust-fan.component.css']
})
export class ExhaustFanComponent  {

  formData : any={
    damperControl:'',
    runConditions:'',
    fan:'',
    filterMonitoring:'',
    miscMonitoring:'',
    equipmentID:0,
  };

  constructor(private service : SharedService,private router:Router)
{
}

ngOnInit(): void{
}

sendData(){
console.log(this.formData)
this.service.addExFan(this.formData).subscribe(
  (response)=>{        
    console.log(response);
    this.router.navigate(['/spec-option']);
   },
   
  (error)=>{
    console.log(error);
    this.router.navigate(['/spec-option']);
  }
)
}

}

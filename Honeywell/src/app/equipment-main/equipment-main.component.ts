import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-equipment-main',
  templateUrl: './equipment-main.component.html',
  styleUrls: ['./equipment-main.component.css']
})
export class EquipmentMainComponent implements OnInit{

  
  formData : any={
    projectNumber:0,
    equipmentType:'',
    EquipmentID:0,
    equipmentName:'',
    typicalOf:''
  };
  constructor(private service : SharedService,private router:Router)
{
}
 @Input() sendData1:any;
// projectNumber:any;
 equipmentType:any;
// EquipmentID:any;
// equipmentName:any;
// typicalOf:any;

ngOnInit(): void{
// this.projectNumber=this.sendData1.projectNumber;
 this.equipmentType=this.sendData1.equipmentType;
// this.EquipmentID=this.sendData1.EquipmentID;
// this.equipmentName=this.sendData1.equipmentName;
// this.typicalOf=this.sendData1.typicalOf;
}

sendData(){
  // var value={
  //   projectNumber:this.projectNumber,
    //  equipmentType:this.equipmentType,
  //   EquipmentID:this.EquipmentID,
  //   equipmentName:this.equipmentName,
  //   typicalOf:this.typicalOf

  // }
  
  // if (this.equipmentType === "c Fan") {
  //   this.service.addEquip(value).subscribe(
  //     (result: any) => {
  //       this.router.navigate(['/exhaust-fan'])
  //       console.log(result);
  //     }
  //     ,err =>{
  //       if(err.status==404 || err.status==400)
  //       alert("Login Failed!! Invalid Credentails");
  //       else
  //       console.log(err);
  //     }
  //   )
  // }

// console.log(this.formData)
this.service.addEquip(this.formData).subscribe(
  (response)=>{  
       
    console.log(response);
    
   },
   
  // (error)=>{
  //   console.log(error);
  // }
)
}
redirect()
{
     equipmentType:this.equipmentType
    if(this.formData.equipmentType==="Exhaust Fan")
    {
      this.router.navigate(['/exhaust-fan']);
    }
  else if(this.formData.equipmentType==="Room Units")
  {
    this.router.navigate(['/room-unit']);
  }
  else if(this.formData.equipmentType==="Unitary Heat")
  {
    this.router.navigate(['/unitary-heat']);
  }
}

  }


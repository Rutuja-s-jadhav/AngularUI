import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-room-unit',
  templateUrl: './room-unit.component.html',
  styleUrls: ['./room-unit.component.css']
})
export class RoomUnitComponent {

  formData : any={
    equipmentID:0,
    zoneControl:'',
    safeties:'',
    faceBypassDamper:'',
    cooling:'',
    heatingHighDischargeLimit:'',
    mixedAirDamper:'',
    minimunOutsideAir:'',
    heating:'',
    runConditions:'',
    fan:'',
    miscMonitoring:'',
    environmentalIndex:'',
    filterMonitoring:'',
  };
constructor(private service : SharedService,private router:Router)
{
}
ngOnInit(): void{
}
sendData(){
  console.log(this.formData)
  this.service.addRUnit(this.formData).subscribe(
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

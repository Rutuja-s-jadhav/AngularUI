import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-unitary-heat',
  templateUrl: './unitary-heat.component.html',
  styleUrls: ['./unitary-heat.component.css']
})
export class UnitaryHeatComponent {

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
    environmentalIndex:0,
    filterMonitoring:'',
  };
  constructor(private service : SharedService,private router:Router)
{
}

ngOnInit(): void{
}

sendData(){
  console.log(this.formData)
  this.service.addUnHeat(this.formData).subscribe(
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

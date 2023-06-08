import { Component } from '@angular/core';
import { equipment } from '../models/equipment.model';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent {
  // equipment_type:any;
   equipments:equipment[]=[];
  constructor(private equipmentservice:SharedService){}
  
  ngOnInit():void{

    this.equipmentservice.getallequipment().subscribe((result: any) => {

      this.equipments = result;

      console.log(this.equipments);

    });

  }
    
    // this.equipmentservice.getallequipment()
    // .subscribe({
    //   next:(equipment)=>{
    //     console.log(equipment.values);
    //     // this.equipment_type=equipment.values;
    //   },
    //   error: (response)=>{
    //     console.log(response);
    //   } 
    // });
  }


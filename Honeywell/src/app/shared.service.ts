import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { equipment } from './models/equipment.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


readonly APIUrl="http://localhost:5078/api/Equipment";


  constructor(private http:HttpClient, private router:Router) { }

  addEquip(value:any){
    return this.http.post(this.APIUrl+'/AddEquipment',value)
  }

  //http://localhost:5078/api/Equipment/AddExFanDetails

  addExFan(value:any){
    return this.http.post(this.APIUrl+'/AddExFanDetails',value)
  }

  //http://localhost:5078/api/Equipment/UHDetails
  addUnHeat(value:any){
    return this.http.post(this.APIUrl+'/UHDetails',value)
  }

//http://localhost:5078/api/Equipment/AddRUDetails

  addRUnit(value:any){
    return this.http.post(this.APIUrl+'/AddRUDetails',value)
 
  }
  getallequipment(){
    return this.http.get<any[]>("http://localhost:5078/api/Equipment/Equipment");
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadComponent } from './download/download.component';
import { EquipmentMainComponent } from './equipment-main/equipment-main.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { ExhaustFanComponent } from './exhaust-fan/exhaust-fan.component';
import { PreviewComponent } from './preview/preview.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { RoomUnitComponent } from './room-unit/room-unit.component';
import { UnitaryHeatComponent } from './unitary-heat/unitary-heat.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgot-password/forgot-password.component';
import { SpecOptionComponent } from './spec-option/spec-option.component';
import { TestAppComponent } from './test-app/test-app.component';

const routes: Routes = [
  {path:'',component:SignupComponent},
  {path:'equipment',component:EquipmentComponent},
  {path:'exhaust-fan',component:ExhaustFanComponent},
  {path:'room-unit',component:RoomUnitComponent},
  {path:'unitary-heat',component:UnitaryHeatComponent},
  {path:'equipment-main',component:EquipmentMainComponent},
  {path: 'project-info',component:ProjectInfoComponent},
  {path:'preview',component:PreviewComponent},
  {path:'download',component:DownloadComponent},
  {path:'login',component:LoginComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'spec-option',component:SpecOptionComponent},
  {path:'test-app',component:TestAppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}

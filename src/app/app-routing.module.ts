import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplianceListComponent } from './appliance-list/appliance-list.component';
import { CreateApplianceComponent } from './create-appliance/create-appliance.component';
import { UpdateApplianceComponent } from './update-appliance/update-appliance.component';

const routes: Routes = [
  {path:'all', component:ApplianceListComponent},
  {path:'', redirectTo:'all', pathMatch:'full'},
  {path:'create-appliance', component:CreateApplianceComponent},
  {path:'update-appliance/:applianceId', component:UpdateApplianceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
console.warn("routed");
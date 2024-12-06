
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVehicleInsuranceComponent } from './add-vehicle-insurance/add-vehicle-insurance.component';

const routes: Routes = [
  { path: 'add-insurance', component: AddVehicleInsuranceComponent },
  { path: '', redirectTo: '/add-insurance', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

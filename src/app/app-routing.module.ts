import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceHistoryComponent } from './insurance-history/insurance-history.component';

const routes: Routes = [
  {
    path: 'insurance-history',
    component: InsuranceHistoryComponent
  },
  { path: '', redirectTo: '/insurance-history', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
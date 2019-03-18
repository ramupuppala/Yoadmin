import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { BulletinsComponent } from './bulletins/bulletins.component';

import { ComplaintsComponent } from './complaints/complaints.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DrivesComponent } from './drives/drives.component';


const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
 
  {
    path:"bulletins",
    component:BulletinsComponent
  },
 
  {
    path:"complaints",
    component:ComplaintsComponent
  },
  {
    path:"drives",
    component:DrivesComponent
  },
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

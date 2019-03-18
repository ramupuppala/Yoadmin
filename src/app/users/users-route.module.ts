import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadComponent } from './read/read.component';
import { UserDispalyComponent } from './user-dispaly/user-dispaly.component';
import { UsersComponent }  from './users.component';

const routes: Routes = [
  
  {
    path:"user/read",
    component:ReadComponent
  },
  {
    path: "usersDisplay",
    component: UserDispalyComponent
  },
  {
    path: "users",
    component: UsersComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

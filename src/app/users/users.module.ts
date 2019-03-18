import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendsComponent } from './friends/friends.component';
import { DeleteComponent } from './delete/delete.component';
import { UserDispalyComponent } from './user-dispaly/user-dispaly.component';
import { ReadComponent } from './read/read.component';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-route.module'


@NgModule({
  declarations: [
    UserDispalyComponent,
    UsersComponent,
    ReadComponent,
    DeleteComponent,
    FriendsComponent,
    
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports: [
    UsersComponent
  ],
  
 
})
export class UsersModule { }

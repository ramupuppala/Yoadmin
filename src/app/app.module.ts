import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { BulletinsComponent } from './bulletins/bulletins.component';

import { ComplaintsComponent } from './complaints/complaints.component';

import { MyDrivesComponent } from './drives/my-drives/my-drives.component';
import { CompletedDrivesComponent } from './drives/completed-drives/completed-drives.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DrivesComponent } from './drives/drives.component';
import { ArticlesModule } from './articles/articles.module';
import { UsersModule } from './users/users.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BulletinsComponent,
    ComplaintsComponent,   
    MyDrivesComponent,
    CompletedDrivesComponent,
    HeaderComponent,
    NavbarComponent,
    DashboardComponent,
    DrivesComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArticlesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

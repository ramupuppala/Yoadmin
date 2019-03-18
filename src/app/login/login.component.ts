import { Component, OnInit ,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginform:NgForm;
  passwordStatus:number;
  username:string;
  pswd:string;
  constructor(private service:ServiceService,private router: Router,) { }

  ngOnInit() {
    if(localStorage.getItem('jwt-token'))
    {
      this.router.navigate(['/dashboard']) 
    }
  }
  onSubmit()
  {
    this.service.doLogin(this.loginform.value).subscribe(
      (data)=>{
        if(data.statuscode == 1)
        {
          this.service.headerNavbar();
          this.service.loginButton();
          localStorage.setItem('jwt-token',data.token);

          this.router.navigate(['/dashboard'])
        }
        else{
          if(data.statuscode==-1)
          {
            this.username="";
            this.pswd="";
            this.loginform.value.password="";
            alert("no such username found")
          }
          else if(data.statuscode<-1)
          {
            this.pswd="";
          }
          this.passwordStatus=data.statuscode;
        }
      }
      
    )
   
  }
}

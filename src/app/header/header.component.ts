import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service:ServiceService,private router: Router) { }

  loginBtn:boolean;
  ngOnInit() {
    this.service.loginBtn.subscribe(loginBtn=>this.loginBtn=loginBtn);
  }
  doLogout()
  {
    localStorage.removeItem('jwt-token');    
    window.location.href="";
  }
}

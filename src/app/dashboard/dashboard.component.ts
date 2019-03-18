import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  header:boolean;
  constructor(private service:ServiceService,private router: Router,) { }
  ngOnInit() {
    // this.service.dashboardNavbar();    
    

  }


}

import { Component,OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  header:boolean;
  constructor(private service:ServiceService) { }
  ngOnInit() {
    console.log(this.service.headerNav)
   this.service.headerNav.subscribe(header=>this.header=header);

   if(localStorage.getItem('jwt-token'))
   {
    this.service.headerNavbar();
    this.service.loginButton();

   }
  }

}

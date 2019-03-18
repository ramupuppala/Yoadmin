import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  httpOptions:{};
  private header=new BehaviorSubject<boolean>(false);
  headerNav=this.header.asObservable();
  private login=new BehaviorSubject<boolean>(false);
  loginBtn=this.login.asObservable();

  constructor(private http: HttpClient ) {
   
   }
  
  headerNavbar(){
    this.header.next(true);
  }
  dashboardNavbar(){
    this.header.next(false);
  }
  
  loginButton(){
    this.login.next(true);
  }

  doLogin(data:any)
  {
    return this.http.post<any>('/api/auth/login',data);
  }
 
}

import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  
  httpOptions: {};
  constructor(private http: HttpClient) {
  }

  searchArticle(searchkey: string) {
    let token=localStorage.getItem('jwt-token');
    let data = { search_string: searchkey };  
    this.httpOptions = {
      headers: new HttpHeaders({

        Authorization : 'Bearer ' + token
      })
    };
    console.log(this.httpOptions);
    return this.http.post<any>('api/article/search', data, this.httpOptions);
  }
}

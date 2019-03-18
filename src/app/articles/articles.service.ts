import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  httpOptions:{};
  

  constructor(private http: HttpClient ) {
   
   }
  
  getAllArticles()
  {
    let token=localStorage.getItem('jwt-token');
    console.log(token)
     this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+token
      })
    }
    console.log(this.httpOptions)
    return this.http.get<any>('api/article/all',this.httpOptions);
  }
  getArticle(id:string)
  {
    let token=localStorage.getItem('jwt-token');
    console.log(token)
     this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+token
      })
    }
    console.log(this.httpOptions)
    return this.http.get<any>('api/article/'+id,this.httpOptions);
  }
  updateArticle(id:string,updatedata:any)
  {
    let token=localStorage.getItem('jwt-token');
    console.log(token)
     this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+token
      })
    }
    console.log(this.httpOptions)
    return this.http.put<any>('api/article/'+id,updatedata,this.httpOptions);
  }
  searchArticle(searchkey:string)
  {
    let data={ search_string:searchkey };
    let token=localStorage.getItem('jwt-token');
    console.log(token)
     this.httpOptions = {
      headers: new HttpHeaders({
       
        'Authorization': 'Bearer '+token
      })
    }
    console.log(this.httpOptions)
    return this.http.post<any>('/api/article/search',data,this.httpOptions);
  }
  createArticle(data:any)
  {
    let token=localStorage.getItem('jwt-token');
    this.httpOptions = {
      headers: new HttpHeaders({      
        'Authorization': 'Bearer '+token
      })
    }
    return this.http.post<any>('api/article',data,this.httpOptions);
  }
  fetchArticleById(id:string)
  {
    let token=localStorage.getItem('jwt-token');
    console.log(token)
     this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+token
      })
    }
    console.log(this.httpOptions)
    return this.http.get<any>('api/article/'+id,this.httpOptions);
  }
}

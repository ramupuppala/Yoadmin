import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './articles.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(private service:ArticlesService,private router: Router) { }
  articles:any;
  searchKey:string;
  ngOnInit() {
    this.service.getAllArticles().subscribe(
      (data)=>{
        console.log(data)
        if(data.statuscode == 1)
        {
          this.articles=data.articles
         
          console.log("success"+this.articles);
        }
      
      }
    )
  }
  onChange(e)
  {
    this.searchKey=e.target.value;
  }
  onSearch(){
    debugger
    console.log(this.searchKey)
    this.service.searchArticle(this.searchKey).subscribe(
      (data)=>{
        console.log(data)
        if(data.statuscode == 1)
        {
          this.articles=data.articles
         
          console.log("success"+this.articles);
        }
      
      }
    )
  }
}

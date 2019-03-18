/**
 * Author       : Ramu
 * Date         : 15-03-2019
 * Description  : This component is used for editing the article based on the edit article service
 */

// component bases imports
import { Component, OnInit ,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
// router based imports
import {Router, ActivatedRoute, Params} from '@angular/router';
// Service based imports
import {ArticlesService }  from './../articles.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @ViewChild('f') updateAritcle:NgForm;
  constructor(private activatedRoute: ActivatedRoute,private service:ArticlesService,private router: Router) { }
  articles:any;
  id:string;
  data:any;
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
       
      this.service.getArticle(this.id).subscribe(
        (data)=>{
          console.log(data)
          if(data.statuscode == 1)
          {
            this.articles=data.article
           
            console.log("success"+this.articles);
          }
        
        }
      )

  });
  }
  onSubmit(){
    console.log(this.updateAritcle.value)
  
    this.service.updateArticle(this.id,this.updateAritcle.value).subscribe(
      (response)=>{
        this.data=response;
      
        if(this.data.statuscode == 1)
        {
          this.router.navigate(['/dashboard'])
        }
      
      }
    )
  }

}

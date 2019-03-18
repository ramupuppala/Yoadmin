/**
 *  Author           :Ramu
    Date             :15-03-2019
    Description      : Code for creating the article using the article service
 *  */

// Component bases imports

import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

// Service based imports
import {ArticlesService }  from './../articles.service';

// Routing based imports
import {Router} from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @ViewChild('f') articles:NgForm;
  constructor(private service:ArticlesService,private router: Router,) { }

  url: string;
 ngOnInit() {
 
  }
  onSelectFile(event) {
    // if (event.target.files && event.target.files[0]) {
    //   var reader = new FileReader();

    //   reader.readAsDataURL(event.target.files[0]); // read file as data url

    //   reader.onload = (event) => { // called once readAsDataURL is completed
    //     this.url = event.target.result;
    //   }
    // }
  }
  onSubmit()
  {
    this.articles.value.image=this.url;
    console.log(this.articles.value)

    this.service.createArticle(this.articles.value).subscribe(
      (data)=>{
        if(data.statuscode == 1)
        {
           this.router.navigate(['/dashboard'])
        }
        console.log(data);
      }
    )
   
  }
}

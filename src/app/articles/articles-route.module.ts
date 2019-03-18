import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ReadComponent } from './read/read.component';

const routes: Routes = [
  {
    path:"article/createarticle",
    component:CreateComponent
  },
  {
    path:"article/read",
    component:ReadComponent
  },
  {
    path:"article/edit",
    component:EditComponent
  },
  {
    path:"article",
    component:ArticlesComponent,
    children: [
      { path: 'createarticle', redirectTo: 'article', pathMatch: 'full' },
      { path: 'createarticle',  component: CreateComponent  },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }

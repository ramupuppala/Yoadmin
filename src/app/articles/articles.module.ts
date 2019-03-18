import { NgModule,ModuleWithProviders  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

import { ArticlesComponent } from './articles.component';
import { EditComponent } from './edit/edit.component';
import { ReadComponent } from './read/read.component';
import { ArticlesRoutingModule } from './articles-route.module';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    ArticlesComponent,
    EditComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ArticlesRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ArticlesComponent
  ],
})
export class ArticlesModule { 
  
}

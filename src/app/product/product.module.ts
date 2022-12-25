import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListComponent } from './list/list.component';
import { HomeModule } from '../home/home.module';
import { ProductComponent } from './product.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
  
      ProductComponent,
       DetailsComponent,
       FormComponent,
       ListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule

    
  ], 
  exports: [
    DetailsComponent,
    FormComponent,
    ListComponent
  ]
})
export class ProductModule { }

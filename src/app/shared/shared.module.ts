import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { ListComponent } from '../product/list/list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ProductListComponent } from '../home/product-list/product-list.component';
import { UserListComponent } from '../home/user-list/user-list.component';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProductModule } from '../product/product.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    ProductListComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    MatPaginatorModule,
    ProductModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatIconModule
  ],
  exports: [
    ListComponent,
    MatTableModule
  ]
})
export class SharedModule { }
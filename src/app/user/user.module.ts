import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [
    FormComponent,
    ListComponent,
    DetailsComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonToggleModule
  ]
})
export class UserModule { }

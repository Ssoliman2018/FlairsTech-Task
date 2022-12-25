import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: '',
    children: [

      {
        path: 'list',
        component: ListComponent,

      },
      {
        path: ':id',
        component: DetailsComponent,

      },
      {
        path: "add",
        component: FormComponent
      } ,
      {
        path: "edit/:id",
        component: DetailsComponent

      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

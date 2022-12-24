import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((_) => _.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((_) => _.HomeModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'products',
    loadChildren: () => import('./product/product.module').then((_) => _.ProductModule),
    canActivate:[AuthGuard]
  },
  { path: '**', pathMatch: 'full', 
  component: Page404Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

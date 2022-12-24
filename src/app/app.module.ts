import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './auth/auth.service';
import { JWT_OPTIONS, JwtModule } from '@auth0/angular-jwt';
import { jwtOptionFactor } from './shared/auth/jwtOptionFactor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Page404Component } from './page404/page404.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SideNavModule } from './side-nav/side-nav.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';


 
@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    SideNavComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   HttpClientModule,
   MatCardModule,
   MatIconModule,
   MatButtonModule,
   SideNavModule,
   MatToolbarModule,
    JwtModule.forRoot({
      jwtOptionsProvider:{
        provide:JWT_OPTIONS,
        useFactory: jwtOptionFactor,
        deps:[AuthService],
      } 
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

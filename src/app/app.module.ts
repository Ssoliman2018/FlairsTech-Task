import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './auth/auth.service';
import { JWT_OPTIONS, JwtModule } from '@auth0/angular-jwt';
import { jwtOptionFactor } from './shared/auth/jwtOptionFactor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Page404Component } from './page404/page404.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SideNavComponent } from './side-nav/side-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';

import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { AuthInterceptor } from './shared/auth/authconfig.interceptor';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    HeaderComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   HttpClientModule,
   MatCardModule,
   MatIconModule,
   MatButtonModule,
   MatSidenavModule,
   MatToolbarModule,
   MatListModule,
   MatMenuModule,
   MatDividerModule,
   SharedModule,
   
    JwtModule.forRoot({
      jwtOptionsProvider:{
        provide:JWT_OPTIONS,
        useFactory: jwtOptionFactor,
        deps:[AuthService],
      } 
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

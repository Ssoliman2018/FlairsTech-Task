import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './auth/auth.service';
import { JWT_OPTIONS, JwtModule } from '@auth0/angular-jwt';
import { jwtOptionFactor } from './shared/auth/jwtOptionFactor';
 

 
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      jwtOptionsProvider:{
        provide:JWT_OPTIONS,
        useFactory: jwtOptionFactor,
        deps:[AuthService]
      } 
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

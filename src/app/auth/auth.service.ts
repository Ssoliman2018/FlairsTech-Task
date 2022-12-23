import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { BehaviorSubject, catchError, map, of } from 'rxjs';
import { UserProfile } from '../shared/auth/user-profile';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginModel } from './login-model';
import { TokenModel } from '../shared/auth/token-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  userData: any;
  baseURL: string = 'https://dummyjson.com/';
  userProfile = new BehaviorSubject<UserProfile | null>(null);
  jwtService: JwtHelperService = new JwtHelperService();
 

  constructor(
    public router: Router,
    public ngZone: NgZone ,
    private http: HttpClient,
    private httpClient: HttpClient
  ) { }


  userLogin(payload: LoginModel) {
    return this.httpClient
      .post('https://dummyjson.com/auth/login', payload)
      .pipe(
        map((data) => {
          console.log('test login data');
          var token = data as TokenModel;
 
          localStorage.setItem('tokens', JSON.stringify(token));
 
          var userInfo = this.jwtService.decodeToken(
            token.access_token
          ) as UserProfile;
 
          this.userProfile.next(userInfo);
 
          return true;
        }),
        catchError((error) => {
          console.log(error);
          return of(false);
        })
    );
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== 'null' ? true : false;
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
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
          var token = data as TokenModel;
          localStorage.setItem('tokens', JSON.stringify(token.token));
          var userInfo = this.jwtService.decodeToken(
            token.token
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

  getAccessToken():string{
    var localStorageToken = localStorage.getItem('tokens');
    if(localStorageToken){
      var token = JSON.parse(localStorageToken) as TokenModel;
      var isTokenExpired = this.jwtService.isTokenExpired(token.token);
      if(isTokenExpired){
        this.userProfile.next(null);
        return "";
      }
      var userInfo = this.jwtService.decodeToken(
        token.token
      ) as UserProfile;
      this.userProfile.next(userInfo);
      return token.token;
    }
    return "";
  }

  getToken() {
    return localStorage.getItem('tokens');
  }
  
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('tokens');
   // return this.loggedIn.asObservable(); // {2}
    return authToken !== null ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('tokens');
    if (removeToken == null) {
      this.router.navigate(['/auth/login']);
    }
  }


}

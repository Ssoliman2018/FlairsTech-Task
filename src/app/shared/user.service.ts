import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user/user';
import { Observable, catchError, map, retry } from 'rxjs';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = "https://dummyjson.com/";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };
  constructor(private httpClient: HttpClient, private errorHandler: ErrorHandlerService) { }


  getUsers() {
    return this.httpClient
      .get<APIResult>(this.apiURL + "users")
      .pipe(
        map(e => e.users),
        retry(1), 
        catchError(this.errorHandler.handleError));
  }

  getUser(id: number) {
    return this.httpClient
      .get<User>(this.apiURL + "users/" + id)
      .pipe(
        retry(1), 
        catchError(this.errorHandler.handleError));
  }
  updateUser(id: number, user: User): Observable<User> {
    return this.httpClient
      .put<User>(
        this.apiURL + 'users/' + id,
        JSON.stringify(user),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandler.handleError));
  }
  
  deleteUser(id: any) {
    return this.httpClient
    .delete<User>(
      this.apiURL + 'users/' + id,
      this.httpOptions
    )
    .pipe(retry(1), catchError(this.errorHandler.handleError));
  }
}

export interface APIResult {
  users: User[],
  total: number,
  skip: number,
  limit: number
}
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService) { 
    console.log('start header')

    this.isLoggedIn$ = this.authService.isLoggedIn;
    console.log('user profile', this.isLoggedIn$)
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { UserProfile } from '../shared/auth/user-profile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  userProfile?: UserProfile | null;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.userProfile.subscribe((data) => {
      this.userProfile = data;
    });
  }

}

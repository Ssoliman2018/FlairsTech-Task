import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { UserProfile } from '../shared/auth/user-profile';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  userProfile?: UserProfile | null;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.userProfile.subscribe((data) => {
      this.userProfile = data;
    });

    console.log('user data >>>', this.userProfile)
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  signout() {
    this.authService.doLogout();
  }

}

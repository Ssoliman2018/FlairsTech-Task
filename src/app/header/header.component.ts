import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { UserProfile } from '../shared/auth/user-profile';
import { AlertsService } from '../shared/alerts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  userProfile?: UserProfile | null;
  constructor(private alertService: AlertsService, private authService: AuthService) { }

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
    this.alertService.warrningAlert('‘Are you sure to logout?’').then((res) => {
      if(res.isConfirmed) {
        this.authService.doLogout();
      }
      
    })
  }

}

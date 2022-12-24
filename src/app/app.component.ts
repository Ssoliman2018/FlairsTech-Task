import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth/auth.service";
import { UserProfile } from "./shared/auth/user-profile";
import { Token } from "@angular/compiler";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
})
export class AppComponent implements OnInit{
  title = "FlairsTech";
  sideBarOpen = true;

  userProfile?: UserProfile | null;
  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.userProfile.subscribe((data) => {
      this.userProfile = data;
    });
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}

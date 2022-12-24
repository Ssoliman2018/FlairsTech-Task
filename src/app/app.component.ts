import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
})
export class AppComponent {
  title = "FlairsTech";
  isLoggedIn$: Observable<boolean>;
  sideBarOpen = true;

  constructor(private authService: AuthService) {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}

import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  CanLoad,
  CanMatch,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard
  implements
    CanActivate
{
  constructor(public authService: AuthService, public router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    
    this.authService.getAccessToken();
    var userProfile = this.authService.userProfile.getValue();
      console.log('userProfile', route.data)
    if ((userProfile ?? 0) > 0) {
      if (route.data['requiredAuth'] == false) {
        this.router.navigate(['/']);
        return false;
      }
 
      return true;
    } else {
      if (route.data['requiredAuth'] == true) {
        this.router.navigate(['auth/login']);
        return false;
      }
      return true;
    }
  }
}

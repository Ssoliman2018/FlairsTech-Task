import { AuthService } from "src/app/auth/auth.service";

export function jwtOptionFactor(authService:AuthService){
    return {
      tokenGetter:() => {
        return authService.getAccessToken();
      },
      allowedDomains:["https://dummyjson.com"],
      disallowedRoutes:[
        "https://dummyjson.com/auth/login"
      ]
    }
  }
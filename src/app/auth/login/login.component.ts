import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { LoginModel } from '../login-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router

  ) {
    this.loginForm = this.formBuilder.nonNullable.group({
      email: ['kminchelle@qq.com', [Validators.required, Validators.email]],
      password: ['0lelplR', Validators.required],
      username: ['kminchelle', Validators.required]
    })

    if (this.authService.isLoggedIn) {  
      this.router.navigate(['home']);  
    }  

  }
  ngOnInit(): void {

  }

  signIn() {
    const loginModel: LoginModel = {
      username: this.loginForm.getRawValue().username,
      password: this.loginForm.getRawValue().password
    }
    this.authService.userLogin(loginModel).subscribe((result) => {
      if (result) {
        console.log('result', result)
        this.router.navigate(['/']);
      }
    })
  }

}

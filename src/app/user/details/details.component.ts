import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {
  userID!: number;
  user!: User;
  editUser: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.getParamID();
    await this.getUserDetails();
    this.editUser = this.router.url.includes('edit') ? true : false;
  }

  getParamID() {
    this.activatedRoute.params.subscribe((param) => {
      console.log('params', param)
      this.userID = param["id"];
    });
  }

  getUserDetails() {
    this.userService
      .getUser(this.userID)
      .subscribe((data: User) => {
        this.user = data;
        console.log('user data', data)
      });
  }

}

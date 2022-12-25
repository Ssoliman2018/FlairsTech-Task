import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {
  userList!: User[] ;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers()
  }

  loadUsers() {
    return this.userService.getUsers().subscribe((data) => {
      console.log('data', data)
      this.userList = data;
    })
  }
}

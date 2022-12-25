import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user/user';
import { AlertsService } from 'src/app/shared/alerts.service';
import { ProductService } from 'src/app/shared/product.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  userList: User[] = [];
  displayedColumns: string[] = ['id', 'image', 'username' , 'fullname' ,'email', 'phone', 'actions'];
  dataSource!: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private userService: UserService, private alertService: AlertsService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

       // Issues list
       loadProducts() {
        return this.userService.getUsers().subscribe((data) => {
          console.log('data', data)
          this.dataSource = new MatTableDataSource<User>(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort
        })
      }
  
  
  
      deleteUser(user: User) {
        this.alertService.warrningAlert(`Are you sure about deleting ${user.email} ?’`).then(res => {
          if (res.isConfirmed){
            this.userService.deleteUser(user.id).subscribe(res => {
              this.alertService.successAlert(`${user.email} Deleted Successfully`);
              this.loadProducts()
            //  console.log('delete result', res)
            }, (e) => {
              this.alertService.errorAlert(`error while deleting ${user.email}`)
            })
          }
        })
      }
}

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  productList: Product[] = [];
  displayedColumns: string[] = ['id', 'image', 'title', 'price', 'actions'];
  dataSource!: MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private productService: ProductService) { }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  ngOnInit(): void {
    this.loadProducts();
    console.log('product list >>', this.productList)
  }
     // Issues list
     loadProducts() {
      return this.productService.getProducts().subscribe((data) => {
        console.log('data', data)
        this.dataSource = new MatTableDataSource<Product>(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
      })
    }

}

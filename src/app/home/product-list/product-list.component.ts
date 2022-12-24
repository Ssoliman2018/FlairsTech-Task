import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
    console.log('product list >>', this.productList)
  }
     // Issues list
     loadProducts() {
      return this.productService.getProducts().subscribe((data) => {
        console.log('data', data)
        this.productList = data;
      })
    }
}

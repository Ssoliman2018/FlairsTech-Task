import { Component, NgZone, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/models/product";
import { ProductService } from "src/app/shared/product.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.sass"],
})
export class DetailsComponent implements OnInit {
  productID!: number;
  product!: Product;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private zone: NgZone
  ) {}

  async ngOnInit() {
    this.getParamID();
    await this.getProductDetails();
  }

  getParamID() {
    this.activatedRoute.params.subscribe((param) => {
      console.log("params >>", param);
      this.productID = param["id"];
      console.log("param", this.productID);
    });
  }

  getProductDetails() {
    this.productService
      .getProduct(this.productID)
      .subscribe((data: Product) => {
        this.product = data;
        console.log('data product', data)
      });
  }
}

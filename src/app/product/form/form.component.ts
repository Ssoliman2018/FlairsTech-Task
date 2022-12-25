import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "src/app/models/product";
import { ProductService } from "src/app/shared/product.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.sass"],
})
export class FormComponent implements OnInit {
  productForm!: FormGroup;
  @Input() product!: Product;
  categoryList!: string[];
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    this.productForm = this.formBuilder.nonNullable.group({
      id: [],
      title: ["", Validators.required],
      description: ["", Validators.required],
      price: [Validators.required],
      discountPercentage: [],
      rating: [],
      stock: [Validators.required],
      brand: ["", Validators.required],
      category: ["", Validators.required],
      thumbnail: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.product) {
      this.productForm.patchValue(this.product);
      this.loadCategories()
      console.log("product form value", this.productForm.getRawValue());

    }
  }

  loadCategories() {
    this.productService.getCategories().subscribe((category: string[]) => {
      this.categoryList = category;
    })
  }

  submitForm() {
    this.router.navigate(['/products/'+this.product.id ])
    this.productService.updateProduct(this.product.id,this.productForm.getRawValue())
    .subscribe(res => {
      console.log('product updated', res);
      this.router.navigate(['/products/'+this.product.id ])
    },
    (error) => {
      console.log('error', error)
    })
  }
}

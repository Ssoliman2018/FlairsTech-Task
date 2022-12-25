import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, filter, map, retry, throwError } from "rxjs";
import { Product } from "../models/product";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private apiURL = "https://dummyjson.com/";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };
  constructor(private httpClient: HttpClient) {}

  getProducts() {
    return this.httpClient
      .get<ProductResult>(this.apiURL + "products")
      .pipe(
        map(e => e.products),
        retry(1), 
        catchError(this.handleError));
  }

  getProduct(id: number) {
    return this.httpClient
      .get<Product>(this.apiURL + "products/" + id)
      .pipe(
        retry(1), 
        catchError(this.handleError));
  }

  getCategories() {
    return this.httpClient
      .get<string[]>(this.apiURL + "products/categories")
      .pipe(
        retry(1), 
        catchError(this.handleError));
  }

  updateProduct(id: number, product: Product) {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: 'PUT', /* or PATCH */
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(console.log);
    
    // cannot use this method becouse cannot update peoduct on serve

    // return this.httpClient
    //   .patch<Product>(
    //     this.apiURL + 'products/' + id,
    //     JSON.stringify(product),
    //     this.httpOptions
    //   )
    //   .pipe(retry(1), catchError(this.handleError));
  }
  
  // Error handling
  handleError(error: any) {
    console.log(error)
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}

export interface ProductResult {
  products: Product[],
  total: number,
  skip: number,
  limit: number
}
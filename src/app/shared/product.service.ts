import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, filter, map, retry, throwError } from "rxjs";
import { Product } from "../models/product";
import { ErrorHandlerService } from "./error-handler.service";

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
  constructor(private httpClient: HttpClient, private errorHandler: ErrorHandlerService) {}

  getProducts() {
    return this.httpClient
      .get<ProductResult>(this.apiURL + "products")
      .pipe(
        map(e => e.products),
        retry(1), 
        catchError(this.errorHandler.handleError));
  }

  getProduct(id: number) {
    return this.httpClient
      .get<Product>(this.apiURL + "products/" + id)
      .pipe(
        retry(1), 
        catchError(this.errorHandler.handleError));
  }

  getCategories() {
    return this.httpClient
      .get<string[]>(this.apiURL + "products/categories")
      .pipe(
        retry(1), 
        catchError(this.errorHandler.handleError));
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    // fetch(`https://dummyjson.com/products/1`, {
    //   method: 'PUT', /* or PATCH */
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(product)
    // })
    // .then(res => res.json())
    // .then(console.log);
    
    return this.httpClient
      .put<Product>(
        this.apiURL + 'products/' + id,
        JSON.stringify(product),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandler.handleError));
  }
  
  deleteProduct(id: any) {
    return this.httpClient
    .delete<Product>(
      this.apiURL + 'products/' + id,
      this.httpOptions
    )
    .pipe(retry(1), catchError(this.errorHandler.handleError));
  }
}

export interface ProductResult {
  products: Product[],
  total: number,
  skip: number,
  limit: number
}
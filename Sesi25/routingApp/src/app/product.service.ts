import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Product } from './models/product';
import { PRODUCTS } from './models/mock-product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]>{
    const products = of(PRODUCTS)

    return products
  }

  getOneProduct (id: number): Product{
    let product: Product
    this
    .getProducts()
    .subscribe(
      products => product = products
      .find(p => p.id === id)!
    )

    return product!
  }
  // getProductById(id: string): Observable<Product> {
  //   const product = PRODUCTS.find((product) => product.id == id)!;
  //   return of(product);
  // }

}

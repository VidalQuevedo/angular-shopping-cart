import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ShoppingCart } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shoppingCart$ = new BehaviorSubject<ShoppingCart>({ id: '', items: [], subTotal: 0 }); // Initializes shopping cart with default value

  constructor(
    private httpClient: HttpClient
  ) {
   this.getShoppingCart(); 
  }

  getShoppingCart() {
    this.httpClient.get<ShoppingCart>('/assets/data.json').subscribe((data) => {
      this.shoppingCart$.next(data);
    },
    () => {
      console.error('Shopping cart data could not be loaded.');
    });
  }


}

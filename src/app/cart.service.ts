import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: Product[] = [];
  constructor() {}

  addToCart(productItem: Product) {
    this.cartItems.push(productItem);
  }

  getItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }
}

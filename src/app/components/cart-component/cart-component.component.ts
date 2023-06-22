import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
})
export class CartComponent {
  cartItems: any[] = [];
  totalPrice: number = 0;

  ngOnInit() {
    //! Obtener datos del local storage
    const cartData = JSON.parse(localStorage.getItem('cartItems') || '[]');
    this.cartItems = cartData;

    //! Calcular el total de la compra
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}

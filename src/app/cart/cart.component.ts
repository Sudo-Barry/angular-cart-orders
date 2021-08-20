import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}
  items = this.cartService.getItems();
  itemQuantity: number = 1;
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  sum: number = this.items
    .map(x => x.productPrice)
    .reduce((a, b) => {
      return a + b;
    });
  total: number = this.sum * this.itemQuantity;
  ngOnInit() {}
  updateSum(event): void {
    this.total = this.sum * event.target.value;
    this.itemQuantity = event.target.value;
  }

  onFormSubmit(): void {
    this.items = this.cartService.clearCart();
    console.log('your Order submitted', this.checkoutForm.value['name']);
    this.checkoutForm.reset();
  }
}

import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}
  items = this.cartService.getItems();
  itemQuantity: number = 1;
  sum: number = this.items
    .map(x => x.productPrice)
    .reduce((a, b) => {
      return a + b;
    });
  total: number = this.sum * this.itemQuantity;
  ngOnInit() {}
  updateSum(event): void {
    this.total = this.sum * event.target.value;
  }
}

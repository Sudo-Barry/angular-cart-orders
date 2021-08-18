import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  item1 = new Product('Headphone', 2500);
  item2 = new Product('Phone', 2500);
  products: Product[] = [this.item1, this.item2];

  constructor(private cartService: CartService) {
    //window.alert('body');
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    // window.alert('added');
  }
  ngOnInit() {
    // window.alert('onInit');
  }
}

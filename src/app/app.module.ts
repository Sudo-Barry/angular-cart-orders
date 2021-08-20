import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
const appRoutes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrderComponent }
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ProductsComponent,
    CartComponent,
    OrderComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'cart', component: CartComponent }
];
@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    AppComponent,
    HelloComponent,
    ProductsComponent,
    CartComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}

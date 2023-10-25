import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { ProductDetailpageComponent } from './product-detailpage/product-detailpage.component';
import { LoginformComponent } from './loginform/loginform.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { ChekoutpageComponent } from './chekoutpage/chekoutpage.component';
import { FooduiComponent } from './foodui/foodui.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilepageComponent,
    ProductDetailpageComponent,
    LoginformComponent,
    AddtocartComponent,
    ChekoutpageComponent,
    FooduiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

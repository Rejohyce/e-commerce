import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    FeaturedProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    FeaturedProductsComponent
  ]
})
export class SharedModule { }

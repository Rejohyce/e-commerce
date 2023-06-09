import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../product';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  [x: string]: any;
  productId: string = ""
  productDetails!: any
  productList = product

  constructor(private activatedRoute: ActivatedRoute) {}
  getProductDetails() {
    this.activatedRoute.params.subscribe((data: any) => {
      console.log(data);
      this.productId = data.id 
      console.log(this.productId);
    });
    for(let i=0; i < this.productList.length; i++) {
      if (this.productId == this.productList[i].id) {
        console.log(this.productList[i]);
        this.productDetails = this.productList[i] 
      }
    }
    console.log(this.productDetails);
    if (this.productDetails == null) {
      console.log("Product Not Found");
    }
  }
  ngOnInit(): void {
    this.getProductDetails ()
  }
  addToCart(productId:string) {
    console.log(productId);
    alert("product has being added sucessfully to your cart");
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  message!: any;
  postDetails: any;
  constructor() {
    postMessage(this.productDetails); {
      this.message=this.productDetails
    }
   }
  productDetails(productDetails: any) {
    throw new Error('Method not implemented.');
  }
   getMessage(){
    return this.message
   }
}

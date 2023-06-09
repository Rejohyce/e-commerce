import { Component } from '@angular/core';
import { product } from '../product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
productList = product
}

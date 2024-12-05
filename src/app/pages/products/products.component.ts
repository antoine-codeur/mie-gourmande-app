import { Component } from '@angular/core';
import { ProductListComponent } from '../../components/products/product-list/product-list.component';

@Component({
  selector: 'app-products',
  imports: [
    ProductListComponent
  ],
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}

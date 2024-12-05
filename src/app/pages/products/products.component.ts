import { Component } from '@angular/core';
import { ProductListComponent } from '../../components/products/product-list/product-list.component';
import { CategoryListComponent } from "../../components/categories/category-list/category-list.component";

@Component({
  selector: 'app-products',
  imports: [
    ProductListComponent,
    CategoryListComponent
],
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}

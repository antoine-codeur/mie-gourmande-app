import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { CurrencyPipe, NgFor } from '@angular/common';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-list',
  imports: [
    NgFor,
    CurrencyPipe
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
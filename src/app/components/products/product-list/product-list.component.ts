import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [
    NgFor,
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des produits :', error);
      }
    );
  }
}

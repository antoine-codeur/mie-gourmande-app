import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { Product } from '../../../models/product.model';
import { CategoryService } from '../../../services/category/category.service';
import { Router } from '@angular/router';
import { NgFor, CurrencyPipe } from '@angular/common';
import { ProductFilterComponent } from '../product-filter/product-filter.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    NgFor,
    CurrencyPipe,
    ProductFilterComponent,
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: any[] = [];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.filteredProducts = data; // Initial filter
    });
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  getCategoryName(categoryId: string): string {
    const category = this.categories.find((cat) => cat._id === categoryId);
    return category ? category.name : 'Non défini';
  }

  applyFilter(filter: any): void {
    this.filteredProducts = this.products.filter((product) => {
      const matchesCategory =
        !filter.categoryId || product.categoryId === filter.categoryId;
      const matchesPrice =
        !filter.maxPrice || product.price <= filter.maxPrice;
      return matchesCategory && matchesPrice;
    });
  }

  navigateToAdd(): void {
    this.router.navigate(['/products/add']);
  }

  navigateToEdit(productId: string): void {
    this.router.navigate([`/products/edit/${productId}`]);
  }

  deleteProduct(productId: string): void {
    this.productService.deleteProduct(productId).subscribe(() => {
      this.loadProducts();
    });
  }
}

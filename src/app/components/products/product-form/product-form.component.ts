import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { CategoryService } from '../../../services/category/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../models/product.model';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    NgFor,
    FormsModule,
  ],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  product: Product = {
    _id: '',
    name: '',
    description: '',
    price: 0,
    stock: 0,
    categoryId: ''
  };
  categories: any[] = [];
  isEditMode: boolean = false;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCategories();
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.isEditMode = true;
      this.loadProduct(productId);
    }
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  loadProduct(id: string): void {
    this.productService.getProducts().subscribe((products) => {
      this.product = products.find((p) => p._id === id) || this.product;
    });
  }

  saveProduct(): void {
    if (this.isEditMode) {
      this.productService.updateProduct(this.product._id, this.product).subscribe(() => {
        this.router.navigate(['/products']);
      });
    } else {
      this.productService.addProduct(this.product).subscribe(() => {
        this.router.navigate(['/products']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}

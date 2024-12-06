import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PromotionService } from '../../../services/promotion/promotion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Promotion } from '../../../models/promotion.model';
import { Product } from '../../../models/product.model';
import { Category } from '../../../models/category.model';
import { ProductService } from '../../../services/product/product.service';
import { CategoryService } from '../../../services/category/category.service';

@Component({
  selector: 'app-promotion-form',
  imports: [
    NgFor,
    ReactiveFormsModule,
  ],
  templateUrl: './promotion-form.component.html',
  styleUrl: './promotion-form.component.scss'
})
export class PromotionFormComponent implements OnInit {
  promotionForm!: FormGroup;
  products: Product[] = [];
  categories: Category[] = [];
  filteredProducts: Product[] = [];
  isEditMode = false;
  promotionId!: string;

  constructor(
    private fb: FormBuilder,
    private promotionService: PromotionService,
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadProducts();
    this.loadCategories();
    this.promotionId = this.route.snapshot.paramMap.get('id') || '';
    if (this.promotionId) {
      this.isEditMode = true;
      this.loadPromotion(this.promotionId);
    }
  }

  initForm(): void {
    this.promotionForm = this.fb.group({
      name: ['', [Validators.required]],
      type: ['percentage', [Validators.required]],
      value: [0, [Validators.required, Validators.min(0)]],
      productIds: [[], [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      status: ['active', [Validators.required]],
      code: ['', [Validators.required]],
    });
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.filteredProducts = data; // Par défaut, tous les produits sont affichés
    });
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  filterProductsByCategory(categoryId: string | null): void {
    if (!categoryId) {
      this.filteredProducts = this.products;
      return;
    }
    this.filteredProducts = this.products.filter(
      (product) => product.categoryId === categoryId
    );
  }

  handleCategoryChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const categoryId = selectElement?.value || null;
    this.filterProductsByCategory(categoryId);
  }
  
  toggleProductSelection(productId: string): void {
    const productIds = this.promotionForm.value.productIds || [];
    if (productIds.includes(productId)) {
      this.promotionForm.patchValue({
        productIds: productIds.filter((id: string) => id !== productId),
      });
    } else {
      this.promotionForm.patchValue({
        productIds: [...productIds, productId],
      });
    }
  }

  isProductSelected(productId: string): boolean {
    const productIds = this.promotionForm.value.productIds || [];
    return productIds.includes(productId);
  }

  loadPromotion(id: string): void {
    this.promotionService.getPromotions().subscribe((promotions) => {
      const promotion = promotions.find((p) => p.id === id);
      if (promotion) {
        this.promotionForm.patchValue(promotion);
      }
    });
  }

  savePromotion(): void {
    if (this.promotionForm.invalid) return;

    const promotion: Promotion = this.promotionForm.value;

    if (this.isEditMode) {
      this.promotionService.updatePromotion(this.promotionId, promotion).subscribe(() => {
        this.router.navigate(['/promotions']);
      });
    } else {
      this.promotionService.addPromotion(promotion).subscribe(() => {
        this.router.navigate(['/promotions']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/promotions']);
  }
}
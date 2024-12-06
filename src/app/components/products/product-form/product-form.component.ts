import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';
import { CategoryService } from '../../../services/category/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../models/product.model';
import { NgIf, NgFor } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    ReactiveFormsModule,
  ],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup; // FormGroup pour le formulaire
  categories: any[] = [];
  isEditMode: boolean = false;
  productId: string | null = null;

  constructor(
    private fb: FormBuilder, // Injecter FormBuilder
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadCategories();
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.isEditMode = true;
      this.loadProduct(this.productId);
    }
  }

  // Initialiser le formulaire
  initForm(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: [0, [Validators.required, Validators.min(0)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      categoryId: ['', [Validators.required]],
    });
  }

  // Charger les catégories
  loadCategories(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  // Charger un produit existant
  loadProduct(id: string): void {
    this.productService.getProducts().subscribe((products) => {
      const product = products.find((p) => p.id === id); // Utilisation de "id" pour correspondre au modèle frontend
      if (product) {
        this.productForm.patchValue(product); // Remplir le formulaire avec les valeurs existantes
      }
    });
  }

  // Sauvegarder le produit
  saveProduct(): void {
    if (this.productForm.invalid) return;

    const product: Product = this.productForm.value;

    if (this.isEditMode && this.productId) {
      // Pour une modification, inclure "id"
      this.productService
        .updateProduct(this.productId, { ...product, id: this.productId })
        .subscribe(() => {
          this.router.navigate(['/products']);
        });
    } else {
      // Pour un ajout, ne pas inclure "id" (JSON Server génère automatiquement l'id)
      this.productService.addProduct(product).subscribe(() => {
        this.router.navigate(['/products']);
      });
    }
  }

  // Annuler
  cancel(): void {
    this.router.navigate(['/products']);
  }
}
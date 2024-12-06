import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoryService } from '../../../services/category/category.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [
    NgFor,
  ],
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  categories: any[] = [];
  @Output() filter = new EventEmitter<{ categoryId?: string; maxPrice?: number }>();

  filterCriteria: { categoryId?: string; maxPrice?: number } = {};

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  onCategoryChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.filterCriteria.categoryId = target.value || undefined;
    this.filter.emit(this.filterCriteria);
  }

  onPriceChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.filterCriteria.maxPrice = target.value ? parseFloat(target.value) : undefined;
    this.filter.emit(this.filterCriteria);
  }
}

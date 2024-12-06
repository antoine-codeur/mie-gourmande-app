import { Component, OnInit } from '@angular/core';
import { Promotion } from '../../../models/promotion.model';
import { PromotionService } from '../../../services/promotion/promotion.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-promotion-list',
  imports: [
    NgFor,
    RouterLink,
  ],
  templateUrl: './promotion-list.component.html',
  styleUrl: './promotion-list.component.scss'
})
export class PromotionListComponent implements OnInit {
  promotions: Promotion[] = [];

  constructor(private promotionService: PromotionService) {}

  ngOnInit(): void {
    this.loadPromotions();
  }

  loadPromotions(): void {
    this.promotionService.getPromotions().subscribe((data) => {
      this.promotions = data;
    });
  }
  deletePromotion(id: string): void {
    this.promotionService.deletePromotion(id).subscribe(() => {
      this.loadPromotions();
    });
  }  
}
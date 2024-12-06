import { Component } from '@angular/core';
import { PromotionListComponent } from '../../components/promotions/promotion-list/promotion-list.component';

@Component({
  selector: 'app-promotions',
  imports: [
    PromotionListComponent,
  ],
  templateUrl: './promotions.component.html',
  styleUrl: './promotions.component.scss'
})
export class PromotionsComponent {

}

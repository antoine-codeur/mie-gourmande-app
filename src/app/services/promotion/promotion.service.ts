import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promotion } from '../../models/promotion.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  private apiUrl = `${environment.apiUrl}/promotions`;

  constructor(private http: HttpClient) {}

  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(this.apiUrl);
  }

  addPromotion(promotion: Promotion): Observable<Promotion> {
    return this.http.post<Promotion>(this.apiUrl, promotion);
  }

  updatePromotion(id: string, promotion: Promotion): Observable<Promotion> {
    return this.http.put<Promotion>(`${this.apiUrl}/${id}`, promotion);
  }

  deletePromotion(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

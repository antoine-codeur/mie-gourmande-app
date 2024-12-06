import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductFormComponent } from './components/products/product-form/product-form.component';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { PromotionFormComponent } from './components/promotions/promotion-form/promotion-form.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'products/add', component: ProductFormComponent },
    { path: 'products/edit/:id', component: ProductFormComponent },
    { path: 'promotions', component: PromotionsComponent },
    { path: 'promotions/add', component: PromotionFormComponent },
    { path: 'promotions/edit/:id', component: PromotionFormComponent },
];
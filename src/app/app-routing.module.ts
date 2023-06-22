import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login-component/login-component.component';
import { RegisterComponent } from './components/register-component/register-component.component';
import { UserProfileComponent } from './components/user-profile-component/user-profile-component.component';
import { HomeComponent } from './components/home-component/home-component.component';
import { ProductSearchComponent } from './components/product-search-component/product-search-component.component';
import { ProductDetailComponent } from './components/product-detail-component/product-detail-component.component';
import { CartComponent } from './components/cart-component/cart-component.component';
import { authGuard } from './guards/auth.guard.guard';




const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Ruta principal
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: ProductSearchComponent },
  { path: 'product', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

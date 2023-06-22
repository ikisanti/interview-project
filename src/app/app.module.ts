import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login-component/login-component.component';
import { RegisterComponent } from './components/register-component/register-component.component';
import { UserProfileComponent } from './components/user-profile-component/user-profile-component.component';
import { HomeComponent } from './components/home-component/home-component.component';
import { ProductSearchComponent } from './components/product-search-component/product-search-component.component';
import { ProductDetailComponent } from './components/product-detail-component/product-detail-component.component';
import { CartComponent } from './components/cart-component/cart-component.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    HomeComponent,
    ProductSearchComponent,
    ProductDetailComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

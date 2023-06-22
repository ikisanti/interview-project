import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Product } from '../../Interfaces/InterfaceApi'

@Component({
  selector: 'app-product-search-component',
  templateUrl: './product-search-component.component.html',
})
export class ProductSearchComponent {

  apiData: any[] = [];
  selectedCategory: string = '';
  categories: string[] = [];
  selectedProduct: any;
  cartCount: number = 0;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getData().subscribe((data: any) => {
      this.apiData = data[0].products.map((product: Product) => ({
        id: product.id,
        title: product.title,
        brand: product.brand,
        category: product.category,
        price: product.price,
        description: product.description,
        specifications: {
          display: product.specifications.display,
          processor: product.specifications.processor,
          memory: product.specifications.memory,
          storage: product.specifications.storage,
          operating_system: product.specifications.operating_system
        }
      }));
      this.categories = this.getUniqueCategories();
      console.log(this.apiData)
    });
    let cartItems = JSON.parse(localStorage.getItem('cartItems') ?? '[]');
    this.cartCount = cartItems.length;
  }

  getUniqueCategories(): string[] {
    return Array.from(new Set(this.apiData.map(item => item.category)));
  }

  get filteredData(): any[] {
    if (!this.selectedCategory) {
      return this.apiData;
    } else {
      return this.apiData.filter(item => item.category === this.selectedCategory);
    }
  }

  openModal(item: any) {
    this.selectedProduct = item;
    console.log(item);
  }

  addToCart(product: any) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems') ?? '[]');
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    this.cartCount = cartItems.length;
    alert("Agregado al carrito de compras")
  }
}



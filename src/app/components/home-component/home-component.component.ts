import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Product } from '../../Interfaces/InterfaceApi';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
})
export class HomeComponent {

  apiData: any[] = []; // Arreglo para almacenar los datos de la API

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // Se obtienen los datos de la API al inicializar el componente
    this.apiService.getData().subscribe((data: any) => {
      // Mapear los datos de la API al formato deseado y almacenarlos en 'apiData'
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
      console.log(this.apiData);
    });
  }

  // Obtener las categorías únicas presentes en los datos de la API
  getUniqueCategories(): string[] {
    return Array.from(new Set(this.apiData.map(item => item.category)));
  }
}


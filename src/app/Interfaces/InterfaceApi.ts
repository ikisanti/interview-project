export interface Product {
    id: number;
    title: string;
    brand: string;
    category: string;
    price: number;
    description: string;
    specifications: {
      display: string;
      processor: string;
      memory: string;
      storage: string;
      operating_system: string;
    };
  }
  
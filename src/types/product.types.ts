export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  name?: string;
}

export interface PaginationOptions {
  page: number;
  limit: number;
  sort?: {
    [key: string]: 'asc' | 'desc';
  };
} 
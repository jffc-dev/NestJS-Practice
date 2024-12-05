import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/Product.interface';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [];

  create(product: Product) {
    this.products.push(product);
  }

  findAll() {
    return this.products;
  }
}

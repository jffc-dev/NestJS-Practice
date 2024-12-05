import { Controller, Get } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';

@Controller('orders')
export class OrdersController {
  constructor(private productsService: ProductsService) {}
  @Get()
  getProducts() {
    return this.productsService.findAll();
  }

  @Get(':id')
  getOrder() {
    return this.productsService.findOneById();
  }
}

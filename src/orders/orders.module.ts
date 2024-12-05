import { forwardRef, Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { ProductsModule } from 'src/products/products.module';

@Module({
  controllers: [OrdersController],
  providers: [],
  imports: [forwardRef(() => ProductsModule)],
})
export class OrdersModule {}

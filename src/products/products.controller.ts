import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';
import { LoggingInterceptor } from 'src/logging.iterceptor';

@Controller({ host: ':admin.example.com', path: 'products' })
@UseInterceptors(LoggingInterceptor)
export class ProductsController {
  constructor(public productsService: ProductsService) {}
  @Get()
  @HttpCode(203)
  getProducts() {
    return this.productsService.findAll();
  }

  @Get('as*qw')
  @Header('Cache-Control', 'no-store')
  findProducts() {
    return 9;
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    console.log(typeof id === 'number');
    return id;
  }

  @Get('redirect')
  @Redirect('https://google.com', 302)
  redirectData(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/', statusCode: 404 };
    }
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  createProduct(@Body() createProductDto: CreateProductDto) {
    this.productsService.create(createProductDto);
    return createProductDto;
  }
}

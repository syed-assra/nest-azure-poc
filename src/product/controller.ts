import { Controller } from '@nestjs/common';
import { ProductService } from './service';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  create(): string {
    return this.productService.create();
  }

  fetch(): string {
    return this.productService.fetch();
  }

  update(): string {
    return this.productService.update();
  }

  delete(): string {
    return this.productService.delete();
  }
}

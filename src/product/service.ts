import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  create(): string {
    return 'Product is created successfully!';
  }

  fetch(): string {
    return 'Product is fetched successfully!';
  }

  update(): string {
    return 'Product is updated successfully!';
  }

  delete(): string {
    return 'Product is deleted successfully!';
  }
}

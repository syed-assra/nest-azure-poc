import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './controller';
import { ProductService } from './service';

describe('AppController', () => {
  let productController: ProductController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductService],
    }).compile();

    productController = app.get<ProductController>(ProductController);
  });

  describe('root', () => {
    it('should successfully create', () => {
      expect(productController.create()).toBe('Product is created successfully!');
    });

    it('should successfully fetch', () => {
      expect(productController.fetch()).toBe('Product is fetched successfully!');
    });

    it('should successfully update', () => {
      expect(productController.update()).toBe('Product is updated successfully!');
    });

    it('should successfully delete', () => {
      expect(productController.delete()).toBe('Product is deleted successfully!');
    });
  });
});

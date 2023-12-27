import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './controller';
import { UserService } from './service';

describe('AppController', () => {
  let userController: UserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    userController = app.get<UserController>(UserController);
  });

  describe('root', () => {
    it('should successfully create', () => {
      expect(userController.create()).toBe('User is created successfully!');
    });

    it('should successfully fetch', () => {
      expect(userController.fetch()).toBe('User is fetched successfully!');
    });

    it('should successfully update', () => {
      expect(userController.update()).toBe('User is updated successfully!');
    });

    it('should successfully delete', () => {
      expect(userController.delete()).toBe('User is deleted successfully!');
    });
  });
});

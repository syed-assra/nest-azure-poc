import { Controller } from '@nestjs/common';
import { UserService } from './service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  create(): string {
    return this.userService.create();
  }

  fetch(): string {
    return this.userService.fetch();
  }

  update(): string {
    return this.userService.update();
  }

  delete(): string {
    return this.userService.delete();
  }
}

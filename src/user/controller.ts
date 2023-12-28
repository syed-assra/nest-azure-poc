import { Controller } from '@nestjs/common';
import { UserService } from './service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) { }

  create(): string {
    return this.userService.create();
  }

  async fetch(): Promise<string> {
    return this.userService.getGroupProposals();
  }

  async getGroupProposals_2(): Promise<string> {
    return this.userService.getGroupProposals_2();
  }

  update(): string {
    return this.userService.update();
  }

  delete(): string {
    return this.userService.delete();
  }
}

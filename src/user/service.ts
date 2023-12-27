import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  create(): string {
    return 'User is created successfully!';
  }

  fetch(): string {
    return 'User is fetched successfully!';
  }

  update(): string {
    return 'User is updated successfully!';
  }

  delete(): string {
    return 'User is deleted successfully!';
  }
}

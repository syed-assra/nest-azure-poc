import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class UserService {
  create(): string {
    return 'User is created successfully!';
  }

  async getGroupProposals(): Promise<string> {
    let response;

    const options = {
      'headers': {
        'Content-Type': 'application/json',
        'X-ebao-tenant-id': 'afli',
        'Authorization': 'Bearer eBaoCChN3mR2252k4VZFqFTbV3W5liQR'
      }
    };

    try {
      response = await axios.get('https://pttst-gw.insuremo.com/afli/1.0/afli-bs/groupProposals/GR000012', options)
      console.log("Response", response)
    } catch (error) {
      console.log("Error:", error);
    }

    return response;
  }

  async getGroupProposals_2(): Promise<string> {
    let response;

    const options = {
      'headers': {
        'Content-Type': 'application/json',
        'X-ebao-tenant-id': 'afli',
        'Authorization': 'Bearer eBaoCCuglrYyaFn3SLx5j0HlWQykrBQV'
      }
    };

    try {
      response = await axios.get('https://sandbox-2-sg-gw.insuremo.com/afli/1.0/afli-bs/groupProposals/GR000012', options)
      console.log("Response", response)
    } catch (error) {
      console.log("Error:", error);
    }

    return response;
  }

  update(): string {
    return 'User is updated successfully!';
  }

  delete(): string {
    return 'User is deleted successfully!';
  }
}

import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class InsureMOService {
  async pttstGroupProposals(): Promise<Record<string, any>> {
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
    } catch (error) {
      console.log("Error:", error);
    }

    return response.data;
  }

  async sdbGroupProposals(): Promise<Record<string, any>> {
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
    } catch (error) {
      console.log("Error:", error);
    }

    return response.data;
  }
}

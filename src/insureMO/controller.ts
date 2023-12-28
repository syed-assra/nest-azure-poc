import { Controller } from '@nestjs/common';
import { InsureMOService } from './service';

@Controller()
export class InsureMOController {
  constructor(private readonly imoService: InsureMOService) { }

  async pttstGroupProposals(): Promise<Record<string, any>> {
    return this.imoService.pttstGroupProposals();
  }

  async sdbGroupProposals(): Promise<Record<string, any>> {
    return this.imoService.sdbGroupProposals();
  }
}

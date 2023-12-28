import { Test, TestingModule } from '@nestjs/testing';
import { InsureMOController } from './controller';
import { InsureMOService } from './service';

describe('InsureMOController', () => {
  let imoController: InsureMOController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [InsureMOController],
      providers: [InsureMOService],
    }).compile();

    imoController = app.get<InsureMOController>(InsureMOController);
  });

  describe('root', () => {
    it('should successfully get reposnse from pttst server', async () => {
      const data = await imoController.pttstGroupProposals()
      expect(data).toHaveProperty('result', 1);
    });

    it('should successfully get reposnse from sdb server', async () => {
      const data = await imoController.sdbGroupProposals()
      expect(data).toHaveProperty('result', 1);
    });
  });
});

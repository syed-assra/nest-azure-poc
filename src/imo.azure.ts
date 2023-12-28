import { NestFactory } from '@nestjs/core';
import { InsureMOModule } from './insureMO/module';
import { InsureMOController } from './insureMO/controller';
import { app } from '@azure/functions';

async function imoFucntion() {
  const imoContext = await NestFactory.createApplicationContext(InsureMOModule);
  const imoController = imoContext.get(InsureMOController)

  app.http('pttstGroupProposals', {
    methods: ['GET'],
    route: 'pttst/groupproposals',
    handler: async (request, context) => {
      return {
        jsonBody: await imoController.pttstGroupProposals(),
      }
    }
  })

  app.http('sdbGroupProposals', {
    methods: ['GET'],
    route: 'sdb/groupproposals',
    handler: async (request, context) => {
      return {
        jsonBody: await imoController.sdbGroupProposals(),
      }
    }
  })
}

imoFucntion()

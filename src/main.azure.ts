import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppController } from './app.controller';
import { app } from '@azure/functions';

async function createFucntion() {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const appController = appContext.get(AppController)
  
  app.http('main', {
    methods: ['GET', 'POST'],
    handler: async (request, context) => {
      return {
        body: appController.getHello(),
      }
    }
  })
}

createFucntion()

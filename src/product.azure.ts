import { NestFactory } from '@nestjs/core';
import { ProductModule } from './product/module';
import { ProductController } from './product/controller';
import { app } from '@azure/functions';

async function productFucntion() {
  const appContext = await NestFactory.createApplicationContext(ProductModule);
  const appController = appContext.get(ProductController)
  
  app.http('product_create', {
    methods: ['POST'],
    route: 'product',
    handler: async (request, context) => {
      return {
        body: appController.create(),
      }
    }
  })

  app.http('product_fetch', {
    methods: ['GET'],
    route: 'product',
    handler: async (request, context) => {
      return {
        body: appController.fetch(),
      }
    }
  })

  app.http('product_update', {
    methods: ['PUT'],
    route: 'product',
    handler: async (request, context) => {
      return {
        body: appController.update(),
      }
    }
  })

  app.http('product_delete', {
    methods: ['DELETE'],
    route: 'product',
    handler: async (request, context) => {
      return {
        body: appController.delete(),
      }
    }
  })
}

productFucntion()

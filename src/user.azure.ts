import { NestFactory } from '@nestjs/core';
import { UserModule } from './user/module';
import { UserController } from './user/controller';
import { app } from '@azure/functions';

async function userFucntion() {
  const userContext = await NestFactory.createApplicationContext(UserModule);
  const userController = userContext.get(UserController)
  
  app.http('user_create', {
    methods: ['POST'],
    route: 'user',
    handler: async (request, context) => {
      return {
        body: userController.create(),
      }
    }
  })

  app.http('user_fetch', {
    methods: ['GET'],
    route: 'user',
    handler: async (request, context) => {
      return {
        body: userController.fetch(),
      }
    }
  })

  app.http('user_update', {
    methods: ['PUT'],
    route: 'user',
    handler: async (request, context) => {
      return {
        body: userController.update(),
      }
    }
  })

  app.http('user_delete', {
    methods: ['DELETE'],
    route: 'user',
    handler: async (request, context) => {
      return {
        body: userController.delete(),
      }
    }
  })
}

userFucntion()

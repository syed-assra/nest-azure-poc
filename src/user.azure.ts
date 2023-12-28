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
        body: await userController.fetch(),
      }
    }
  })

  app.http('getGroupProposals_2', {
    methods: ['GET'],
    route: 'getGroupProposals_2',
    handler: async (request, context) => {
      return {
        body: await userController.getGroupProposals_2(),
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

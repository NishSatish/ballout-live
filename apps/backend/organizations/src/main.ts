import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { MicroServiceTransports } from '@ballout/libs/commons/src';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice(MicroServiceTransports.organizationsTransport.nats);

  app.startAllMicroservices()
    .then(_ => {
      Logger.log('ORGANIZATIONS SERVER STARTED');
    })
    .catch(e => {
      Logger.error('Org Microservice failed to start ', e);
    });
}

bootstrap();

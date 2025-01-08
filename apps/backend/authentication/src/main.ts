import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { MicroServiceTransports } from '@ballout/libs/commons/src';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice(MicroServiceTransports.authenticationTransport.nats)
  await app.startAllMicroservices()
    .then(() => {
      new Logger('AUTHENTICATION').log('Auth server started')
    })
    .catch(err => {
      console.log(err);
    });
  await app.init();
}

bootstrap();

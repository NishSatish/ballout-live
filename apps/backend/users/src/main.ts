import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { MicroServiceTransports } from '@ballout/libs/commons/src';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.connectMicroservice(MicroServiceTransports.usersTransport.nats);
	Logger.log(`🚀 Users service started successfully`);
}

bootstrap();

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { MessagePatterns } from '@ballout/libs/commons/src';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @MessagePattern(MessagePatterns.authentication.getToken)
  sendToken() {
    console.log("received");
    return 'take da dei';
  }
}

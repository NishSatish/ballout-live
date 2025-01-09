import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserDto, MessagePatterns } from '@ballout/libs/commons/src';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


}

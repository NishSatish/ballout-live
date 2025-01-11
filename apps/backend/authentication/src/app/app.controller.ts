import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { CreateUserDto, MessagePatterns } from '@ballout/libs/commons/src';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern(MessagePatterns.authentication.createUser)
  async createUser(data: CreateUserDto) {
    return this.appService.saveUserToDB(data);
  }

  @MessagePattern(MessagePatterns.authentication.loginUser)
  async loginUser(data: { email: string, password: string }) {
    return this.appService.loginUser(data);
  }
}

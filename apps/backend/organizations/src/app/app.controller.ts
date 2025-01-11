import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePatterns } from '@ballout/libs/commons/src';
import { MessagePattern } from '@nestjs/microservices';
import { CreateOrgDto } from '@ballout/libs/commons/src/lib/dto/create-org.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern(MessagePatterns.organizations.createOrganization)
  createOrg(orgData: CreateOrgDto) {
    return;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateOrgDto } from '@ballout/libs/commons/src/lib/dto/create-org.dto';

@Injectable()
export class AppService {
  saveOrganization(orgData: CreateOrgDto) {

  }
}

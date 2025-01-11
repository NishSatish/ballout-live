import { Controller, Get, Req } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { CreateOrgDto } from '@ballout/libs/commons/src/lib/dto/create-org.dto';

@Controller('organizations')
export class OrganizationsController {
  constructor(private organizationsService: OrganizationsService) {
  }

  @Get('create')
  createOrgHandler(@Req() req: Request) {
    const orgData = req.body as unknown as CreateOrgDto;
    return this.organizationsService.dispatchCreateOrganization(orgData);
  }
}

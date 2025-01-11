import { Controller, Get, Post, Req } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { CreateOrgDto } from '@ballout/libs/commons/src/lib/dto/create-org.dto';
import { CheckPermissions } from '../utils/decorators/permission.decorator';
import { OrganizationAction } from '@ballout/role-policies';

@Controller('organizations')
export class OrganizationsController {
  constructor(private organizationsService: OrganizationsService) {
  }

  @Post('create')
  @CheckPermissions({resource: 'Organization', action: OrganizationAction.CreateOrganization})
  createOrgHandler(@Req() req: any) {
    console.log(req.user);
    const orgData = req.body as unknown as CreateOrgDto;
    return this.organizationsService.dispatchCreateOrganization(orgData, req!.user as string);
  }

  @Get('get')
  testePerms(@Req() req: Request) {
    return this.organizationsService.showAll();
  }
}

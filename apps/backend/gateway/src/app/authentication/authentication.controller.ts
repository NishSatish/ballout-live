import { Controller, Get } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { CheckPermissions } from '../utils/decorators/permission.decorator';
import { OrganizationAction } from '@ballout/libs/role-policies/src';

@Controller('authentication')
export class AuthenticationController {
  constructor(private authService: AuthenticationService) {}
  @Get('login')
  @CheckPermissions({action: OrganizationAction.CreateOrganization, resource: 'Organization'})
  login() {
    console.log("step1");
    return  this.authService.getToken();
  }
}

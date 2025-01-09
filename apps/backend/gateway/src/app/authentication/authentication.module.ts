import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { RolePoliciesService } from '@ballout/libs/role-policies/src/lib/role-policies.service';

@Module({
  controllers: [AuthenticationController],
  providers: [AuthenticationService, RolePoliciesService],
  imports: []
})
export class AuthenticationModule {}

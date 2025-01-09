import { Module } from '@nestjs/common';
import { RolePoliciesService } from './role-policies.service';

@Module({
  controllers: [],
  providers: [RolePoliciesService],
  exports: [RolePoliciesService],
})
export class RolePoliciesModule {}

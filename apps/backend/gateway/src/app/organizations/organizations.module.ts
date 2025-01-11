import { Module } from '@nestjs/common';
import { OrganizationsController } from './organizations.controller';
import { OrganizationsService } from './organizations.service';
import { DatabaseModule } from '@ballout/database';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Organization } from '@ballout/libs/database/src/lib/schemas/Organization.schema';
import { RolePoliciesService } from '@ballout/libs/role-policies/src/lib/role-policies.service';
import { RolePoliciesModule } from '@ballout/role-policies';

@Module({
  controllers: [OrganizationsController],
  providers: [OrganizationsService, RolePoliciesService],
})
export class OrganizationsModule {}

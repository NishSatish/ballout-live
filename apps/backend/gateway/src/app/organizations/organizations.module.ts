import { Module } from '@nestjs/common';
import { OrganizationsController } from './organizations.controller';
import { OrganizationsService } from './organizations.service';
import { DatabaseModule } from '@ballout/database';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Organization } from '@ballout/libs/database/src/lib/schemas/Organization.schema';

@Module({
  controllers: [OrganizationsController],
  providers: [OrganizationsService],
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{
      name: Organization.name,
      schema: Organization
    }])
  ]
})
export class OrganizationsModule {}

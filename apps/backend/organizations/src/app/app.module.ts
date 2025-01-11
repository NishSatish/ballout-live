import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from '@ballout/database';
import { MongooseModule } from '@nestjs/mongoose';
import { Organization, OrganizationSchema } from '@ballout/libs/database/src/lib/schemas/Organization.schema';
import { User, UserSchema } from '@ballout/libs/database/src/lib/schemas/User.schema';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{
      name: Organization.name,
      schema: OrganizationSchema
    }, {
      name: User.name,
      schema: UserSchema
    }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

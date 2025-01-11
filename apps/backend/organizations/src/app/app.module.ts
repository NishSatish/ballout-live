import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from '@ballout/database';
import { MongooseModule } from '@nestjs/mongoose';
import { Organization } from '@ballout/libs/database/src/lib/schemas/Organization.schema';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{
      name: Organization.name,
      schema: Organization
    }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

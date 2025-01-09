import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import configuration from '@config';
import { DatabaseModule } from '@ballout/database';
import { User, UserSchema } from '@ballout/libs/database/src/lib/schemas/User.schema';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{
      name: User.name,
      schema: UserSchema
    }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

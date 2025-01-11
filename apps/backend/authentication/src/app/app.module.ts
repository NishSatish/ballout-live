import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from '@ballout/database';
import { User, UserSchema } from '@ballout/libs/database/src/lib/schemas/User.schema';
import { JwtModule } from '@nestjs/jwt';
import configuration from '@config';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{
      name: User.name,
      schema: UserSchema
    }]),
    JwtModule.register({
      global: true,
      secret: configuration().JWT_SECRET,
      signOptions: {
        expiresIn: '36000s'
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

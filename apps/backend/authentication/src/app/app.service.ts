import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '@ballout/libs/database/src/lib/schemas/User.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from '@ballout/libs/commons/src';

@Injectable()
export class AppService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {
  }

  async saveUserToDB(user: CreateUserDto) {
    try {
      const createdUser = await new this.userModel(user).save()
      Logger.log('User successfully signed up', createdUser)
      return createdUser;
    } catch (e) {
      Logger.error(e)
      return e;
    }
  }
}

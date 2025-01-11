import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '@ballout/libs/database/src/lib/schemas/User.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from '@ballout/libs/commons/src';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import configuration from '@config';

@Injectable()
export class AppService {
  constructor(@InjectModel(User.name) private userModel: Model<User>, private jwtService: JwtService) {
  }

  async saveUserToDB(user: CreateUserDto) {
    const hashPwd = await bcrypt.hash(user.password, 3);
    user = { ...user, password: hashPwd };
    try {
      const createdUser = await new this.userModel(user).save()
      Logger.log('User successfully signed up', createdUser)
      return createdUser;
    } catch (e) {
      Logger.error(e)
      return e;
    }
  }

  async loginUser(data: { email: string; password: string }) {
    try {
      const user = await this.userModel.findOne({ email: data.email });
      if (!user) throw new Error('User not found g')
      const isPwdMatch = await bcrypt.compare(data.password, user.password);
      if (isPwdMatch) {
        return  this.jwtService.sign({
          user: user._id,
          role: 'Regular' // @TODO: Separate Organization Login Will Give You A Valid Role
        },
          {
            secret: configuration().JWT_SECRET
          });
      }
    } catch(e) {
      Logger.error(e);
      return e;
    }

  }
}

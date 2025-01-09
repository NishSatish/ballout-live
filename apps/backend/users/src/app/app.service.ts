import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '@ballout/libs/commons/src';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '@ballout/libs/database/src/lib/schemas/User.schema';
import { Model } from 'mongoose';

@Injectable()
export class AppService {

}

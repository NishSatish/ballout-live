import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from '@ballout/libs/commons/src';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '@ballout/libs/database/src/lib/schemas/User.schema';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
	constructor(@InjectModel(User.name) private userModel: Model<User>) {}

	async getMe(user: string) {
		try {
			const userProfile = this.userModel.findById(user);
			Logger.log(user, userProfile);
			return userProfile;
		} catch (e) {
			return e;
		}
	}
}

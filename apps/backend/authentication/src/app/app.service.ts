import {
	Injectable,
	InternalServerErrorException,
	Logger,
	UnauthorizedException,
} from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import {
	IUserDocument,
	User,
} from '@ballout/libs/database/src/lib/schemas/User.schema';
import { Connection, Model } from 'mongoose';
import { CreateUserDto } from '@ballout/libs/commons/src';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import configuration from '@config';
import { log } from 'expo/build/devtools/logger';
import { Organization, transactionHandler } from '@ballout/database';

@Injectable()
export class AppService {
	constructor(
		@InjectModel(User.name) private userModel: Model<User>,
		@InjectModel(Organization.name)
		private organizationModel: Model<Organization>,
		@InjectConnection() private connection: Connection,
		private jwtService: JwtService
	) {}

	async saveUserToDB(user: CreateUserDto) {
		const { email, password, firstName, lastName } = user;
		try {
			const hashPwd = await bcrypt.hash(password, 3);
			const createdUser = await new this.userModel({
				email,
				firstName,
				lastName,
				password: hashPwd,
			}).save();
			Logger.log('User successfully signed up', createdUser);
			return createdUser;
		} catch (e) {
			Logger.error(e);
			return { error: e };
		}
	}

	async loginUser(data: { email: string; password: string }) {
		return transactionHandler(this.connection, async () => {
			const user = await this.userModel
				.findOne({ email: data.email })
				.populate('organizations.org', 'name')
				.exec();
			if (!user) throw new UnauthorizedException('Invalid credentials');

			const isPwdMatch = await bcrypt.compare(data.password, user.password);
			if (!isPwdMatch) {
				throw new UnauthorizedException('Invalid credentials');
			}
			const token = this.jwtService.sign(
				{
					user: user._id,
				},
				{
					secret: configuration().JWT_SECRET,
				}
			);

			user['password'] = undefined;
			return {
				token,
				user,
			};
		});
	}
}

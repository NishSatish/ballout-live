import { Injectable, Logger } from '@nestjs/common';
import {
	ClientOptions,
	ClientProxy,
	ClientProxyFactory,
} from '@nestjs/microservices';
import {
	MessagePatterns,
	MicroServiceTransports,
} from '@ballout/libs/commons/src';
import { MsvcCommunicator } from '../utils/msvcCommunicator';

@Injectable()
export class UsersService {
	private usersClient: ClientProxy;
	constructor() {
		this.usersClient = ClientProxyFactory.create(
			MicroServiceTransports.usersTransport.nats as ClientOptions
		);
	}

	async getMe(user: string) {
		try {
			return await MsvcCommunicator.configure(
				this.usersClient,
				MessagePatterns.users.me
			).send({ user }, (res) => {
				console.log(res);
			});
		} catch (e) {
			Logger.error(e);
		}
	}
}

import {
	HttpException,
	Injectable,
	InternalServerErrorException,
	Logger,
	UnauthorizedException,
} from '@nestjs/common';
import {
	ClientOptions,
	ClientProxy,
	ClientProxyFactory,
} from '@nestjs/microservices';
import {
	AuthStatusCodes,
	CreateUserDto,
	MessagePatterns,
	MicroServiceTransports,
} from '@ballout/libs/commons/src';
import { firstValueFrom, map } from 'rxjs';
import { MsvcCommunicator } from '../utils/msvcCommunicator';

@Injectable()
export class AuthenticationService {
	private authenticationClient: ClientProxy;

	constructor() {
		this.authenticationClient = ClientProxyFactory.create(
			MicroServiceTransports.authenticationTransport.nats as ClientOptions
		);
	}

	async createUser(userData: CreateUserDto): Promise<Record<any, any>> {
		const { email, password, firstName, lastName } = userData;
		if (
			[email, password, firstName, lastName].some(
				(cred) => cred == null || cred.length == 0
			)
		)
			throw new HttpException(
				'missing credentials',
				AuthStatusCodes.signup.credentialsMissing
			);

		try {
			return await MsvcCommunicator.configure(
				this.authenticationClient,
				MessagePatterns.authentication.createUser
			).send(userData, (signupResult) => {
				if (!signupResult || signupResult.error)
					return { error: 'signup error' };

				return { message: 'success' };
			});
		} catch (e) {
			Logger.error(e);
			throw new InternalServerErrorException(e);
		}
	}

	async login(creds: {
		email: string;
		password: string;
	}): Promise<Record<any, any>> {
		if (!creds.email || !creds.password) {
			throw new HttpException(
				'missing credentials',
				AuthStatusCodes.login.credentialsMissing
			);
		}

		try {
			return await MsvcCommunicator.configure(
				this.authenticationClient,
				MessagePatterns.authentication.loginUser
			).send(creds, (loginResult) => {
				if (!loginResult || loginResult.error)
					return { error: loginResult.error as Error };

				return {
					token: loginResult.token,
					user: loginResult.user,
				};
			});
		} catch (e) {
			Logger.error(e);
			throw new InternalServerErrorException(e);
		}
	}
}

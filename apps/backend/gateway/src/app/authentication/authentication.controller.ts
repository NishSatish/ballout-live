import {
	Controller,
	HttpCode,
	HttpException,
	HttpStatus,
	Post,
	Req,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthStatusCodes, CreateUserDto } from '@ballout/libs/commons/src';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SwaggerDoc } from '../utils/decorators/swagger.decorator';

@Controller('auth')
export class AuthenticationController {
	constructor(private authService: AuthenticationService) {}

	@Post('login')
	@SwaggerDoc({
		summary: 'logs in user',
		responses: Object.keys(AuthStatusCodes.signup).map((key) => {
			return {
				status: AuthStatusCodes.signup[key],
				description: key,
			};
		}),
	})
	@HttpCode(AuthStatusCodes.login.success)
	async login(@Req() req: Request) {
		const credentials = req.body as unknown as {
			email: string;
			password: string;
		};
		const res = await this.authService.login(credentials);
		if (res.error) {
			throw new HttpException(res.error.response, HttpStatus.UNAUTHORIZED);
		}
		return res;
	}

	@Post('signup')
	@SwaggerDoc({
		summary: 'Creates new user',
		responses: Object.keys(AuthStatusCodes.signup).map((key) => {
			return {
				status: AuthStatusCodes.signup[key],
				description: key,
			};
		}),
	})
	@HttpCode(AuthStatusCodes.signup.success)
	async signup(@Req() req: Request) {
		const res = await this.authService.createUser(
			req.body as unknown as CreateUserDto
		);
		if (res.error)
			throw new HttpException(
				res.error.response,
				AuthStatusCodes.signup.credentialsInvalid
			);

		return res;
	}
}

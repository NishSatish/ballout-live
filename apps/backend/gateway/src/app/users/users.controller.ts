import {
	Controller,
	Get,
	HttpException,
	HttpStatus,
	Req,
	UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../utils/guards/auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
	constructor(private usersService: UsersService) {}

	@UseGuards(AuthGuard)
	@Get('me')
	async getMe(@Req() req: { user: string }) {
		const { user } = req;

		if (user.length == 0 || !user)
			throw new HttpException('invalid user', HttpStatus.UNAUTHORIZED);
		return await this.usersService.getMe(user);
	}
}

import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { MessagePatterns } from '@ballout/libs/commons/src';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@MessagePattern(MessagePatterns.users.me)
	me({ user }: { user: string }) {
		return this.appService.getMe(user);
	}
}

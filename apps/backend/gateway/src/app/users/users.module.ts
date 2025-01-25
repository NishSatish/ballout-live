import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthGuard } from '../utils/guards/auth.guard';
import { JwtService } from '@nestjs/jwt';

@Module({
	controllers: [UsersController],
	providers: [UsersService, JwtService, AuthGuard],
	imports: [],
})
export class UsersModule {}

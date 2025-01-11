import { Controller, Get, Post, Req } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { CreateUserDto } from '@ballout/libs/commons/src';

@Controller('auth')
export class AuthenticationController {
  constructor(private authService: AuthenticationService) {}
  @Get('login')
  login(@Req() req: Request) {
    const credentials = req.body as unknown as {email: string, password: string}
    return this.authService.login(credentials);
  }

  @Post('signup')
  signup(@Req() req: Request) {
    return this.authService.createUser(req.body as unknown as CreateUserDto);
  }

}

import { Controller, Get, Post, Req } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { CreateUserDto } from '@ballout/libs/commons/src';

@Controller('auth')
export class AuthenticationController {
  constructor(private authService: AuthenticationService) {}
  @Get('login')
  login() {
    return  this.authService.getToken();
  }

  @Post('signup')
  signup(@Req() req: Request) {
    console.log('step1');
    return this.authService.createUser(req.body as unknown as CreateUserDto);
  }

}

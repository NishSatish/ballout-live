import { Controller, Get, HttpException, HttpStatus, Post, Req, UnauthorizedException } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { CreateUserDto } from '@ballout/libs/commons/src';

@Controller('auth')
export class AuthenticationController {
  constructor(private authService: AuthenticationService) {}
  @Post('login')
  async login(@Req() req: Request) {
    const credentials = req.body as unknown as {email: string, password: string}
    const res = await this.authService.login(credentials);
    if (res.error) throw new HttpException('login failed', HttpStatus.UNAUTHORIZED);
    return res;
  }

  @Post('signup')
  async signup(@Req() req: Request) {
    const res = await this.authService.createUser(req.body as unknown as CreateUserDto);
    if (res.error) throw new HttpException('signup failed', HttpStatus.INTERNAL_SERVER_ERROR);
    return res;
  }

}

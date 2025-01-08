import { Controller, Get } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';

@Controller('authentication')
export class AuthenticationController {
  constructor(private authService: AuthenticationService) {}
  @Get('login')
  login() {
    console.log("step1");
    return  this.authService.getToken();
  }
}

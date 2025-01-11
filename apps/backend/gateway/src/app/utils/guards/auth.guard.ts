import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import configuration from '@config';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const [type, token] = request.headers.authorization?.split(' ') || [];
    if (type !== 'Bearer' || !token) throw new UnauthorizedException();
    try {
      const payload: {user: string, role: string}
        = await this.jwtService.verifyAsync(token, { secret: configuration().JWT_SECRET });

      request['user'] = payload.user;
      request['userRole'] = payload.role;
    } catch (e) {
      throw new UnauthorizedException();
    }
    return true;
  }

}

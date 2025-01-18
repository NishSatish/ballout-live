import { Injectable, InternalServerErrorException, Logger, UnauthorizedException } from '@nestjs/common';
import { ClientOptions, ClientProxy, ClientProxyFactory } from '@nestjs/microservices';
import { CreateUserDto, MessagePatterns, MicroServiceTransports } from '@ballout/libs/commons/src';
import { firstValueFrom, map } from 'rxjs';

@Injectable()
export class AuthenticationService {
  private authenticationClient: ClientProxy;

  constructor() {
    this.authenticationClient = ClientProxyFactory.create(MicroServiceTransports.authenticationTransport.nats as ClientOptions)
  }

  async createUser(userData: CreateUserDto): Promise<Record<any, any>> {
    // if (Object.keys(userData).some(userInfo => userInfo == null)) {
    //   return 'missing data';
    // }
    try {
      return await firstValueFrom(this.authenticationClient
        .send(MessagePatterns.authentication.createUser, userData)
        .pipe(
          map(signupResult => {
            if (!signupResult || signupResult.error) return { error: 'signup error' };

            return { message: 'success' };
          })
        ));
    } catch(e) {
      Logger.error(e);
      throw new InternalServerErrorException(e);
    }
  }

  async login(creds: { email: string, password: string }): Promise<Record<any, any>> {
    if (!creds.email ||  !creds.password) {
      throw new UnauthorizedException('invalid credentials');
    }
    try {
      return await firstValueFrom(this.authenticationClient
        .send(MessagePatterns.authentication.loginUser, creds)
        .pipe(
          map(loginResult => {
            if (!loginResult || loginResult.error) return { error: 'login error' };
            return {
              token: loginResult.token,
              user: loginResult.user
            }
          })
        ));
    } catch(e) {
      Logger.error(e);
      throw new InternalServerErrorException(e);
    }
  }
}

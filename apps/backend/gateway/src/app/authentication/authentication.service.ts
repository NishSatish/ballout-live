import { Injectable, Logger } from '@nestjs/common';
import { ClientOptions, ClientProxy, ClientProxyFactory } from '@nestjs/microservices';
import { CreateUserDto, MessagePatterns, MicroServiceTransports } from '@ballout/libs/commons/src';

@Injectable()
export class AuthenticationService {
  private authenticationClient: ClientProxy;

  constructor() {
    this.authenticationClient = ClientProxyFactory.create(MicroServiceTransports.authenticationTransport.nats as ClientOptions)
  }

  createUser(userData: CreateUserDto) {
    if (Object.keys(userData).some(userInfo => userInfo == null)) {
      return 'missing data';
    }
    try {
      const res = this.authenticationClient.send(MessagePatterns.authentication.createUser, userData)
      Logger.log(res);
      return res;
    } catch(e) {
      Logger.error(e);
      return e;
    }
  }

  login(creds: { email: string, password: string }) {
    if (!creds.email ||  !creds.password) {
      return
    }
    try {
      const res = this.authenticationClient.send(MessagePatterns.authentication.loginUser, creds)
      Logger.log(res);
      return res;
    } catch(e) {
      Logger.error(e);
      return e;
    }
  }
}

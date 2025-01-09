import { Injectable } from '@nestjs/common';
import { ClientOptions, ClientProxy, ClientProxyFactory } from '@nestjs/microservices';
import { CreateUserDto, MessagePatterns, MicroServiceTransports } from '@ballout/libs/commons/src';

@Injectable()
export class AuthenticationService {
  private authenticationClient: ClientProxy;
  private usersClient: ClientProxy;

  constructor() {
    this.authenticationClient = ClientProxyFactory.create(MicroServiceTransports.authenticationTransport.nats as ClientOptions)
    this.usersClient = ClientProxyFactory.create(MicroServiceTransports.usersTransport.nats as ClientOptions);
  }

  getToken() {
    return this.authenticationClient.send(MessagePatterns.authentication.getToken, {})
  }

  createUser(userData: CreateUserDto) {
    console.log('step2', userData);
    if (Object.keys(userData).some(userInfo => userInfo == null)) {
      return 'missing data';
    }
    try {
      const res = this.authenticationClient.send(MessagePatterns.authentication.createUser, userData)
      console.log(res);
      return res;
    } catch(e) {
      console.log(e);
    }
  }


}

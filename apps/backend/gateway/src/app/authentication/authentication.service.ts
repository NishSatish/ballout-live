import { Injectable } from '@nestjs/common';
import { ClientOptions, ClientProxy, ClientProxyFactory } from '@nestjs/microservices';
import { MessagePatterns, MicroServiceTransports } from '@ballout/libs/commons/src';

@Injectable()
export class AuthenticationService {
  private authenticationClient: ClientProxy;

  constructor() {
    this.authenticationClient = ClientProxyFactory.create(MicroServiceTransports.authenticationTransport as ClientOptions)
  }

  getToken() {
    return this.authenticationClient.send(MessagePatterns, {})
  }
}

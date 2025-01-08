import { Injectable } from '@nestjs/common';
import { MicroServiceTransports } from './transports';
import { ClientOptions } from '@nestjs/microservices';

@Injectable()
export class MsvcTransportsService {
  getAuthenticationServiceTransports() {
    return MicroServiceTransports.authenticationTransport as ClientOptions;
  }
}

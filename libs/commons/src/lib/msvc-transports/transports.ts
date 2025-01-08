import { Transport } from '@nestjs/microservices';
import configuration from '@config';

export const MicroServiceTransports = {
  authenticationTransport: {
    nats: {
      transport: Transport.NATS,
      options: {
        servers: [configuration().NATS_SERVER],
        queue: 'authentication_queue',
        retryAttempts: 5,
        waitOnFirstConnect: true
      }
    }
  }
}

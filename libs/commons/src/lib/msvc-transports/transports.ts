import { Transport } from '@nestjs/microservices';
import configuration from '@config';

export const MicroServiceTransports = {
  authenticationTransport: {
    nats: {
      transport: Transport.NATS,
      options: {
        servers: ['nats://localhost:4222'],
        queue: 'authentication_queue',
        retryAttempts: 10,
        retryDelay: 3000,
        maxReconnectAttempts: -1,
        waitOnFirstConnect: true
      }
    }
  }
}

import { Transport } from '@nestjs/microservices';
import configuration from '@config';

const baseNatsConfig = {
  transport: Transport.NATS,
  options: {
    servers: [configuration().NATS_SERVER],
    retryAttempts: 10,
    retryDelay: 3000,
    maxReconnectAttempts: -1,
    waitOnFirstConnect: true
  }
}

export const MicroServiceTransports = {
  authenticationTransport: {
    nats: {
      ...baseNatsConfig,
      options: {
        ...baseNatsConfig.options,
        queue: 'authentication_queue'
      }
    }
  },

  usersTransport: {
    nats: {
      ...baseNatsConfig,
      options: {
        ...baseNatsConfig.options,
        queue: 'users_queue'
      }
    }
  }
}

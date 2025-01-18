import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom, map } from 'rxjs';

type E = {
  error: string
}

export class MsvcCommunicator {
  private static client: ClientProxy;
  private static msgPattern: string;

  static configure(client: ClientProxy, msgPattern: string) {
    this.client = client;
    this.msgPattern = msgPattern;

    return this;
  }

  static async send<T>(body: Record<any, any>, validator: (args: any) => T | E): Promise<T | E> {
    return await firstValueFrom(
      this.client
        .send(this.msgPattern, body)
        .pipe(
          map(res => {
            return validator(res)
          })
        )
    )
  }
}

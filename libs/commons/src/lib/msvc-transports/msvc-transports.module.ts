import { Module } from '@nestjs/common';
import { MsvcTransportsService } from './msvc-transports.service';

@Module({
  controllers: [],
  providers: [MsvcTransportsService],
  exports: [MsvcTransportsService],
})
export class MsvcTransportsMsvcTransportsModule {}

import { Module } from '@nestjs/common';
import { CallService } from './call.service';
import { CallGateway } from './call.gateway';

@Module({
  providers: [CallGateway, CallService],
})
export class CallModule {}

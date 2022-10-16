import { Module } from '@nestjs/common';
import { PinService } from './pin.service';
import { PinResolver } from './pin.resolver';

@Module({
  providers: [PinResolver, PinService]
})
export class PinModule {}

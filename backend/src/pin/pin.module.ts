import { Module } from '@nestjs/common';
import { PinService } from './pin.service';
import { PinResolver } from './pin.resolver';
import {PrismaService} from "../prisma.service";

@Module({
  providers: [PinResolver, PinService, PrismaService]
})
export class PinModule {}

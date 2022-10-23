import {Injectable} from '@nestjs/common';
import {CreatePinInput} from './dto/create-pin.input';
import {UpdatePinInput} from './dto/update-pin.input';
import {PrismaService} from "../prisma.service";
import {Pin} from "@prisma/client";
import {PaginatedPins} from "./entities/pin.entity";

@Injectable()
export class PinService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePinInput): Promise<Pin> {
    const now = Date.now();

    return this.prisma.pin.create({
      data: {
        ...data,
        creationDate: now,
        updatedDate: now,
      }
    });
  }

  async findAll(cursor?: string, pageSize?: number): Promise<PaginatedPins> {
    const take: number = pageSize ?? 10;
    const items = await this.prisma.pin.findMany({
      take,
      cursor: cursor ? {
        id: cursor
      } : undefined,
    });

    return {
      items,
      cursor: items[items.length - 1].id,
      hasNextPage: items.length == take,
    }
  }

  findOne(id: string) {
    return `This action returns a #${id} pin`;
  }

  async update(id: string, data: UpdatePinInput) {
    return this.prisma.pin.update({
      where: {
        id: id,
      },
      data
    });
  }

  remove(id: string) {
    return `This action removes a #${id} pin`;
  }
}

import {Injectable} from '@nestjs/common';
import {CreatePinInput} from './dto/create-pin.input';
import {UpdatePinInput} from './dto/update-pin.input';
import {PrismaService} from "../prisma.service";
import {Pin} from "@prisma/client";

@Injectable()
export class PinService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePinInput): Promise<Pin> {
    return this.prisma.pin.create({data});
  }

  findAll(): [Pin] {
    return [
      {
        id: "1",
        long: 2.5,
        lat: 2.5
      }
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} pin`;
  }

  update(id: number, updatePinInput: UpdatePinInput) {
    return `This action updates a #${id} pin`;
  }

  remove(id: number) {
    return `This action removes a #${id} pin`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreatePinInput } from './dto/create-pin.input';
import { UpdatePinInput } from './dto/update-pin.input';

@Injectable()
export class PinService {
  create(createPinInput: CreatePinInput) {
    return 'This action adds a new pin';
  }

  findAll() {
    return `This action returns all pin`;
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

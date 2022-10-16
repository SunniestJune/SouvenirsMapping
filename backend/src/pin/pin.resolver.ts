import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PinService } from './pin.service';
import { Pin } from './entities/pin.entity';
import { CreatePinInput } from './dto/create-pin.input';
import { UpdatePinInput } from './dto/update-pin.input';

@Resolver(() => Pin)
export class PinResolver {
  constructor(private readonly pinService: PinService) {}

  @Mutation(() => Pin)
  createPin(@Args('createPinInput') createPinInput: CreatePinInput) {
    return this.pinService.create(createPinInput);
  }

  @Query(() => [Pin], { name: 'pin' })
  findAll() {
    return this.pinService.findAll();
  }

  @Query(() => Pin, { name: 'pin' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.pinService.findOne(id);
  }

  @Mutation(() => Pin)
  updatePin(@Args('updatePinInput') updatePinInput: UpdatePinInput) {
    return this.pinService.update(updatePinInput.id, updatePinInput);
  }

  @Mutation(() => Pin)
  removePin(@Args('id', { type: () => Int }) id: number) {
    return this.pinService.remove(id);
  }
}

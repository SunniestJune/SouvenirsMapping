import {Resolver, Query, Mutation, Args, Int} from '@nestjs/graphql';
import { PinService } from './pin.service';
import {PaginatedPins, Pin} from './entities/pin.entity';
import { CreatePinInput } from './dto/create-pin.input';
import { UpdatePinInput } from './dto/update-pin.input';

@Resolver(() => Pin)
export class PinResolver {
  constructor(private readonly pinService: PinService) {}

  @Mutation(() => Pin)
  createPin(@Args('pin') pin: CreatePinInput) {
    return this.pinService.create(pin);
  }

  @Query(() => PaginatedPins, { name: 'pins' })
  findAll(
    @Args('cursor', { type: () => String, nullable: true }) cursor?: string,
    @Args('pageSize', { type: () => Int, nullable: true }) pageSize?: number
  ) {
    return this.pinService.findAll(cursor, pageSize);
  }

  @Query(() => Pin, { name: 'pin' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.pinService.findOne(id);
  }

  @Mutation(() => Pin)
  updatePin(@Args('id') id: string, @Args('pin') input: UpdatePinInput) {
    return this.pinService.update(id, input);
  }

  @Mutation(() => Pin)
  removePin(@Args('id', { type: () => String }) id: string) {
    return this.pinService.remove(id);
  }
}

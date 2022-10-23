import { CreatePinInput } from './create-pin.input';
import {InputType, PartialType} from '@nestjs/graphql';

@InputType()
export class UpdatePinInput extends PartialType(CreatePinInput) {}

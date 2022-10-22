import {InputType, Field, Float} from '@nestjs/graphql';

@InputType()
export class CreatePinInput {
  @Field(() => Float, { description: 'Longitude of the Pin' })
  long: number;

  @Field(() => Float, { description: 'Latitude of the Pin' })
  lat: number;
}

import {ObjectType, Field, Int, Float} from '@nestjs/graphql';

@ObjectType()
export class Pin {
  @Field(() => Int, { description: 'Id of the pin' })
  id: number;

  @Field(() => Float, { description: 'Longitude coordinates of the pin' })
  long: number;

  @Field(() => Float, { description: 'Latitude coordinates of the pin' })
  lat: number;
}

import {ObjectType, Field, Float} from '@nestjs/graphql';

@ObjectType()
export class Pin {
  @Field(() => String, { description: 'Id of the pin' })
  id: string;

  @Field(() => Float, { description: 'Longitude coordinates of the pin' })
  long: number;

  @Field(() => Float, { description: 'Latitude coordinates of the pin' })
  lat: number;

  @Field(() => Float, { description: 'Creation date of the pin' })
  creationDate: number;

  @Field(() => Float, { description: 'Update date of the pin' })
  updatedDate: number;
}

@ObjectType()
export class PaginatedPins
{
  @Field(() => [Pin])
  items: Pin[];

  @Field(() => String)
  cursor: string;

  @Field(() => Boolean)
  hasNextPage: boolean;
}

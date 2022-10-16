import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Pin {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

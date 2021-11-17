import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Signof {
  @Field(() => Int, { description: 'ID', nullable: true })
  id: number;
  kunde: string;
  datum: Date;
  @Field(() => Float, { nullable: false })
  stunden: number;
  @Field(() => String)
  unterschrift: string;
  von: string;
  bis: string;
}

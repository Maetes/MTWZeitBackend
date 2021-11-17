import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateSignofInput {
  @Field(() => Date, { nullable: false })
  datum: Date;
  @Field(() => Float, { nullable: false })
  stunden: number;
  kunde: string;
  unterschrift: string;
  von: string;
  bis: string;
}

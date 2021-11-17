import { CreateSignofInput } from './create-signof.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSignofInput extends PartialType(CreateSignofInput) {
  @Field(() => Int)
  id: number;
}

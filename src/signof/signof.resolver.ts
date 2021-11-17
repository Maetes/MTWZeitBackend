import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SignofService } from './signof.service';
import { Signof } from './entities/signof.entity';
import { CreateSignofInput } from './dto/create-signof.input';
import { UpdateSignofInput } from './dto/update-signof.input';
import { create } from 'domain';
import { NotAcceptableException } from '@nestjs/common';

@Resolver(() => Signof)
export class SignofResolver {
  constructor(private readonly signofService: SignofService) {}

  @Mutation(() => Signof)
  createSignof(
    @Args('createSignofInput') createSignofInput: CreateSignofInput
  ) {
    if (createSignofInput.stunden < 0)
      throw new NotAcceptableException(
        'Eine Kundenzeit von 0 kann nicht gespeichert werden.'
      );
    return this.signofService.create(createSignofInput);
  }

  @Query(() => [Signof], { name: 'signofAll' })
  findAll() {
    return this.signofService.findAll();
  }

  @Query(() => Signof, { name: 'signof' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.signofService.findOne(id);
  }

  // @Mutation(() => Signof)
  // updateSignof(@Args('updateSignofInput') updateSignofInput: UpdateSignofInput) {
  //   return this.signofService.update(updateSignofInput.id, updateSignofInput);
  // }

  @Mutation(() => Signof)
  removeSignof(@Args('id', { type: () => Int }) id: number) {
    return this.signofService.remove(id);
  }
}

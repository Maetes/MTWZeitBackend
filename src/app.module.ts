import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { RecipesModule } from './recipes/recipes.module';
import { SignofModule } from './signof/signof.module';
import { PrismaService } from '../prisma/prisma.service';
import { GraphqlOptions } from './graphql.options';

@Module({
  imports: [
    RecipesModule,
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
    SignofModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}

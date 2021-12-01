import { Injectable } from '@nestjs/common';
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

@Injectable()
export class GraphqlOptions implements GqlOptionsFactory {
  createGqlOptions(): Promise<GqlModuleOptions> | GqlModuleOptions {
    return {
      autoSchemaFile: 'scasdasdhemasda.gql',
      installSubscriptionHandlers: true,
      sortSchema: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      debug: true,
      // typePaths: ['./src/**/*.graphql'],
      // path: '/',
      // resolverValidationOptions: {
      //   requireResolversForResolveType: 'ignore',
      // },
      // definitions: {
      //   path: join(process.cwd(), 'src/graphql.schema.d.ts'),
      //   outputAs: 'class',
      // },
      introspection: true,
      cors: {
        origin: '*',
        allowedHeaders:
          'Content-Type,Accept,Authorization,Access-Control-Allow-Origin',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      },
    };
  }
}

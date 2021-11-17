"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphqlOptions = void 0;
const common_1 = require("@nestjs/common");
const apollo_server_core_1 = require("apollo-server-core");
let GraphqlOptions = class GraphqlOptions {
    createGqlOptions() {
        return {
            autoSchemaFile: 'scasdasdhemasda.gql',
            installSubscriptionHandlers: true,
            sortSchema: true,
            playground: false,
            plugins: [(0, apollo_server_core_1.ApolloServerPluginLandingPageLocalDefault)()],
            debug: true,
            introspection: true,
            cors: true,
        };
    }
};
GraphqlOptions = __decorate([
    (0, common_1.Injectable)()
], GraphqlOptions);
exports.GraphqlOptions = GraphqlOptions;
//# sourceMappingURL=graphql.options.js.map
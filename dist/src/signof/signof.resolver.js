"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignofResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const signof_service_1 = require("./signof.service");
const signof_entity_1 = require("./entities/signof.entity");
const create_signof_input_1 = require("./dto/create-signof.input");
const common_1 = require("@nestjs/common");
let SignofResolver = class SignofResolver {
    constructor(signofService) {
        this.signofService = signofService;
    }
    createSignof(createSignofInput) {
        if (createSignofInput.stunden < 0)
            throw new common_1.NotAcceptableException('Eine Kundenzeit von 0 kann nicht gespeichert werden.');
        return this.signofService.create(createSignofInput);
    }
    findAll() {
        return this.signofService.findAll();
    }
    findOne(id) {
        return this.signofService.findOne(id);
    }
    removeSignof(id) {
        return this.signofService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => signof_entity_1.Signof),
    __param(0, (0, graphql_1.Args)('createSignofInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_signof_input_1.CreateSignofInput]),
    __metadata("design:returntype", void 0)
], SignofResolver.prototype, "createSignof", null);
__decorate([
    (0, graphql_1.Query)(() => [signof_entity_1.Signof], { name: 'signofAll' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SignofResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => signof_entity_1.Signof, { name: 'signof' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SignofResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => signof_entity_1.Signof),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SignofResolver.prototype, "removeSignof", null);
SignofResolver = __decorate([
    (0, graphql_1.Resolver)(() => signof_entity_1.Signof),
    __metadata("design:paramtypes", [signof_service_1.SignofService])
], SignofResolver);
exports.SignofResolver = SignofResolver;
//# sourceMappingURL=signof.resolver.js.map
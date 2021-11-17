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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Signof = void 0;
const graphql_1 = require("@nestjs/graphql");
let Signof = class Signof {
    static _GRAPHQL_METADATA_FACTORY() {
        return { id: { type: () => Number }, kunde: { type: () => String }, datum: { type: () => Date }, stunden: { type: () => Number }, unterschrift: { type: () => String }, von: { type: () => String }, bis: { type: () => String } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'ID', nullable: true }),
    __metadata("design:type", Number)
], Signof.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: false }),
    __metadata("design:type", Number)
], Signof.prototype, "stunden", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Signof.prototype, "unterschrift", void 0);
Signof = __decorate([
    (0, graphql_1.ObjectType)()
], Signof);
exports.Signof = Signof;
//# sourceMappingURL=signof.entity.js.map
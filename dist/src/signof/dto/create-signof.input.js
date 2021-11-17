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
exports.CreateSignofInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateSignofInput = class CreateSignofInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return { datum: { type: () => Date }, stunden: { type: () => Number }, kunde: { type: () => String }, unterschrift: { type: () => String }, von: { type: () => String }, bis: { type: () => String } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], CreateSignofInput.prototype, "datum", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { nullable: false }),
    __metadata("design:type", Number)
], CreateSignofInput.prototype, "stunden", void 0);
CreateSignofInput = __decorate([
    (0, graphql_1.InputType)()
], CreateSignofInput);
exports.CreateSignofInput = CreateSignofInput;
//# sourceMappingURL=create-signof.input.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayAttentionsModule = void 0;
const common_1 = require("@nestjs/common");
const pay_attentions_controller_1 = require("./pay-attentions.controller");
const pay_attentions_service_1 = require("./pay-attentions.service");
const sequelize_1 = require("@nestjs/sequelize");
const user_model_1 = require("../users/user.model");
const file_module_1 = require("../file/file.module");
const auth_module_1 = require("../auth/auth.module");
const pay_attention_model_1 = require("./pay-attention.model");
let PayAttentionsModule = class PayAttentionsModule {
};
PayAttentionsModule = __decorate([
    (0, common_1.Module)({
        controllers: [pay_attentions_controller_1.PayAttentionsController],
        providers: [pay_attentions_service_1.PayAttentionsService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([user_model_1.User, pay_attention_model_1.PayAttention]),
            file_module_1.FileModule,
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule)
        ],
    })
], PayAttentionsModule);
exports.PayAttentionsModule = PayAttentionsModule;
//# sourceMappingURL=pay-attentions.module.js.map
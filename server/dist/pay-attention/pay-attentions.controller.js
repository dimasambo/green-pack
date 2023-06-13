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
exports.PayAttentionsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const pay_attentions_service_1 = require("./pay-attentions.service");
const create_pay_attention_dto_1 = require("./dto/create-pay-attention.dto");
let PayAttentionsController = class PayAttentionsController {
    constructor(payAttentionService) {
        this.payAttentionService = payAttentionService;
    }
    create(dto, file) {
        return this.payAttentionService.createPayAttention(dto, file.images[0]);
    }
    async getImportant() {
        return this.payAttentionService.getImportantPayAttentions();
    }
    async getByUserId(userId) {
        return this.payAttentionService.getPayAttentionsByUserId(userId);
    }
    async getAll() {
        return this.payAttentionService.getAllPayAttentions();
    }
    async increasePayAttention(id) {
        return this.payAttentionService.increasePayAttentions(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create post' }),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: 'images', maxCount: 1 }])),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pay_attention_dto_1.CreatePayAttentionDto, Object]),
    __metadata("design:returntype", void 0)
], PayAttentionsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get posts' }),
    (0, common_1.Get)('/important'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PayAttentionsController.prototype, "getImportant", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get posts' }),
    (0, common_1.Get)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PayAttentionsController.prototype, "getByUserId", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get posts' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PayAttentionsController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get posts' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PayAttentionsController.prototype, "increasePayAttention", null);
PayAttentionsController = __decorate([
    (0, common_1.Controller)('pay-attention'),
    __metadata("design:paramtypes", [pay_attentions_service_1.PayAttentionsService])
], PayAttentionsController);
exports.PayAttentionsController = PayAttentionsController;
//# sourceMappingURL=pay-attentions.controller.js.map
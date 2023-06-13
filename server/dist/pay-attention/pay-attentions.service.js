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
exports.PayAttentionsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const file_service_1 = require("../file/file.service");
const pay_attention_model_1 = require("./pay-attention.model");
let PayAttentionsService = class PayAttentionsService {
    constructor(payAttentionRepository, fileService) {
        this.payAttentionRepository = payAttentionRepository;
        this.fileService = fileService;
    }
    async createPayAttention(dto, image) {
        const imageName = await this.fileService.createFile(file_service_1.FileType.PICTURE, image);
        await this.payAttentionRepository.create(Object.assign(Object.assign({}, dto), { images: [imageName], payAttentions: 0 }));
        return await this.payAttentionRepository.findAll({ where: { userId: dto.userId }, include: { all: true } });
    }
    async getPayAttentionsByUserId(userId) {
        return await this.payAttentionRepository.findAll({ where: { userId }, include: { all: true } });
    }
    async getAllPayAttentions(count = 10, offset = 0) {
        return await this.payAttentionRepository.findAll({ offset: offset, limit: 30, include: { all: true } });
    }
    async getImportantPayAttentions() {
        return await this.payAttentionRepository.findAll({ where: { important: true }, include: { all: true } });
    }
    async increasePayAttentions(id) {
        const payAttention = await this.payAttentionRepository.findByPk(id);
        if (payAttention.payAttentions === 0) {
            payAttention.important = true;
        }
        payAttention.payAttentions += 1;
        await payAttention.save();
        return payAttention;
    }
};
PayAttentionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(pay_attention_model_1.PayAttention)),
    __metadata("design:paramtypes", [Object, file_service_1.FileService])
], PayAttentionsService);
exports.PayAttentionsService = PayAttentionsService;
//# sourceMappingURL=pay-attentions.service.js.map
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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const post_model_1 = require("./post.model");
const file_service_1 = require("../file/file.service");
let PostsService = class PostsService {
    constructor(postRepository, fileService) {
        this.postRepository = postRepository;
        this.fileService = fileService;
    }
    async createPost(dto, image) {
        const imageName = await this.fileService.createFile(file_service_1.FileType.PICTURE, image);
        await this.postRepository.create(Object.assign(Object.assign({}, dto), { images: [imageName] }));
        return await this.postRepository.findAll({ where: { userId: dto.userId }, include: { all: true } });
    }
    async getPostsByUserId(userId) {
        return await this.postRepository.findAll({ where: { userId }, include: { all: true } });
    }
    async getAllPosts(count = 10, offset = 0) {
        return await this.postRepository.findAll({ offset: offset, limit: 100, include: { all: true } });
    }
};
PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(post_model_1.Post)),
    __metadata("design:paramtypes", [Object, file_service_1.FileService])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map
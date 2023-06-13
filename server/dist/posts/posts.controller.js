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
exports.PostsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const posts_service_1 = require("./posts.service");
const create_post_dto_1 = require("./dto/create-post.dto");
const platform_express_1 = require("@nestjs/platform-express");
let PostsController = class PostsController {
    constructor(postsService) {
        this.postsService = postsService;
    }
    create(dto, file) {
        return this.postsService.createPost(dto, file.images[0]);
    }
    async getByUserId(userId) {
        return this.postsService.getPostsByUserId(userId);
    }
    async getAll() {
        return this.postsService.getAllPosts();
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create post' }),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: 'images', maxCount: 1 }])),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_dto_1.CreatePostDto, Object]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get posts' }),
    (0, common_1.Get)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "getByUserId", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get posts' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "getAll", null);
PostsController = __decorate([
    (0, common_1.Controller)('posts'),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PostsController);
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map
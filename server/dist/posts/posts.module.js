"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsModule = void 0;
const common_1 = require("@nestjs/common");
const posts_controller_1 = require("./posts.controller");
const posts_service_1 = require("./posts.service");
const sequelize_1 = require("@nestjs/sequelize");
const user_model_1 = require("../users/user.model");
const post_model_1 = require("./post.model");
const file_module_1 = require("../file/file.module");
const auth_module_1 = require("../auth/auth.module");
let PostsModule = class PostsModule {
};
PostsModule = __decorate([
    (0, common_1.Module)({
        controllers: [posts_controller_1.PostsController],
        providers: [posts_service_1.PostsService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([user_model_1.User, post_model_1.Post]),
            file_module_1.FileModule,
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule)
        ],
    })
], PostsModule);
exports.PostsModule = PostsModule;
//# sourceMappingURL=posts.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const file_module_1 = require("./file/file.module");
const path = require("path");
const serve_static_1 = require("@nestjs/serve-static");
const sequelize_1 = require("@nestjs/sequelize");
const users_module_1 = require("./users/users.module");
const config_1 = require("@nestjs/config");
const user_model_1 = require("./users/user.model");
const roles_module_1 = require("./roles/roles.module");
const role_model_1 = require("./roles/role.model");
const user_roles_model_1 = require("./roles/user-roles.model");
const auth_module_1 = require("./auth/auth.module");
const posts_module_1 = require("./posts/posts.module");
const post_model_1 = require("./posts/post.model");
const pay_attentions_module_1 = require("./pay-attention/pay-attentions.module");
const pay_attention_model_1 = require("./pay-attention/pay-attention.model");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `.${process.env.NODE_ENV}.env`
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path.resolve(__dirname, 'static')
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'root',
                database: 'eco-management',
                models: [user_model_1.User, role_model_1.Role, user_roles_model_1.UserRoles, post_model_1.Post, pay_attention_model_1.PayAttention],
                autoLoadModels: true,
                synchronize: true
            }),
            users_module_1.UsersModule,
            roles_module_1.RolesModule,
            auth_module_1.AuthModule,
            posts_module_1.PostsModule,
            file_module_1.FileModule,
            pay_attentions_module_1.PayAttentionsModule
        ],
        controllers: [],
        providers: []
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
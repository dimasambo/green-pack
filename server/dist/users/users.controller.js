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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const swagger_1 = require("@nestjs/swagger");
const user_model_1 = require("./user.model");
const roles_auth_decorator_1 = require("../auth/roles-auth.decorator");
const role_guard_1 = require("../auth/role.guard");
const add_role_dto_1 = require("./dto/add-role.dto");
const ban_user_dto_1 = require("./dto/ban-user.dto");
const platform_express_1 = require("@nestjs/platform-express");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    create(userDto) {
        return this.usersService.createUser(userDto);
    }
    changePhoto(id, image) {
        return this.usersService.updateUserPhoto(Number(id), image);
    }
    getAll() {
        return this.usersService.getAllUsers();
    }
    getOne(email) {
        const stringifyEmail = String(email);
        return this.usersService.getUsersByEmail(stringifyEmail);
    }
    addRole(dto) {
        return this.usersService.addRole(dto);
    }
    ban(dto) {
        return this.usersService.ban(dto);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create user' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: user_model_1.User }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Change user avatar' }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "changePhoto", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get users' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [user_model_1.User] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get one user' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: user_model_1.User }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/current'),
    __param(0, (0, common_1.Query)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Add role' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(role_guard_1.RolesGuard),
    (0, common_1.Post)('/role'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_role_dto_1.AddRoleDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "addRole", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Ban user' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(role_guard_1.RolesGuard),
    (0, common_1.Post)('/ban'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ban_user_dto_1.BanUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "ban", null);
UsersController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Controller)('/users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map
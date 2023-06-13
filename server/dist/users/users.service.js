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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_model_1 = require("./user.model");
const roles_service_1 = require("../roles/roles.service");
const file_service_1 = require("../file/file.service");
const bcrypt = require("bcryptjs");
let UsersService = class UsersService {
    constructor(userRepository, roleService, fileService) {
        this.userRepository = userRepository;
        this.roleService = roleService;
        this.fileService = fileService;
    }
    async createUser(dto) {
        const hashPassword = await bcrypt.hash(dto.password, 5);
        const user = await this.userRepository.create(Object.assign(Object.assign({}, dto), { password: hashPassword }));
        const role = await this.roleService.getRoleByValue('USER');
        user.$set('roles', [role.id]);
        user.roles = [role];
        return user;
    }
    async updateUserPhoto(id, image) {
        const imageName = await this.fileService.createFile(file_service_1.FileType.PICTURE, image);
        const user = await this.userRepository.findByPk(id);
        user.image = imageName;
        await user.save();
        return user;
    }
    async getAllUsers() {
        const users = this.userRepository.findAll({ include: { all: true } });
        return users;
    }
    async getUsersByEmail(email) {
        const user = this.userRepository.findOne({ where: { email }, include: { all: true } });
        return user;
    }
    async addRole(dto) {
        const user = await this.userRepository.findByPk(dto.userId);
        const role = await this.roleService.getRoleByValue(dto.value);
        if (role && user) {
            await user.$add('role', role.id);
            return dto;
        }
        throw new common_1.HttpException('The user or role not found', common_1.HttpStatus.NOT_FOUND);
    }
    async ban(dto) {
        const user = await this.userRepository.findByPk(dto.userId);
        if (!user)
            throw new common_1.HttpException('The user not found', common_1.HttpStatus.NOT_FOUND);
        user.banned = true;
        user.banReason = dto.banReason;
        await user.save();
        return user;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [Object, roles_service_1.RolesService,
        file_service_1.FileService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map
import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./user.model";
import {CreateUserDto} from "./dto/create-user.dto";
import {RolesService} from "../roles/roles.service";
import {AddRoleDto} from "./dto/add-role.dto";
import {BanUserDto} from "./dto/ban-user.dto";
import {FileService, FileType} from "../file/file.service";
import * as bcrypt from 'bcryptjs'

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User,
                private roleService: RolesService,
                private fileService: FileService) {}

    async createUser(dto: CreateUserDto) {
        const hashPassword = await bcrypt.hash(dto.password, 5)
        const user = await this.userRepository.create({...dto, password: hashPassword})

        const role = await this.roleService.getRoleByValue('USER')
        user.$set('roles', [role.id])
        user.roles = [role]
        return user
    }

    async updateUserPhoto(id: number, image: Express.Multer.File) {
        const imageName = await this.fileService.createFile(FileType.PICTURE, image)
        const user = await this.userRepository.findByPk(id)
        user.image = imageName
        await user.save()
        return user
    }

    async getAllUsers() {
        const users = this.userRepository.findAll({include: {all: true}})
        return users
    }

    async getUsersByEmail(email: string) {
        const user = this.userRepository.findOne({where: {email}, include: {all: true}})
        return user
    }

    async addRole(dto: AddRoleDto) {
        const user = await this.userRepository.findByPk(dto.userId)
        const role = await this.roleService.getRoleByValue(dto.value)
        if(role && user) {
            await user.$add('role', role.id)
            return dto
        }
        throw new HttpException('The user or role not found', HttpStatus.NOT_FOUND)
    }

    async ban(dto: BanUserDto) {
        const user = await this.userRepository.findByPk(dto.userId)
        if(!user) throw new HttpException('The user not found', HttpStatus.NOT_FOUND)
        user.banned = true
        user.banReason = dto.banReason
        await user.save()
        return user
    }

}
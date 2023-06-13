/// <reference types="multer" />
import { User } from "./user.model";
import { CreateUserDto } from "./dto/create-user.dto";
import { RolesService } from "../roles/roles.service";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanUserDto } from "./dto/ban-user.dto";
import { FileService } from "../file/file.service";
export declare class UsersService {
    private userRepository;
    private roleService;
    private fileService;
    constructor(userRepository: typeof User, roleService: RolesService, fileService: FileService);
    createUser(dto: CreateUserDto): Promise<User>;
    updateUserPhoto(id: number, image: Express.Multer.File): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUsersByEmail(email: string): Promise<User>;
    addRole(dto: AddRoleDto): Promise<AddRoleDto>;
    ban(dto: BanUserDto): Promise<User>;
}

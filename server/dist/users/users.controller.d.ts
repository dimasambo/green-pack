/// <reference types="multer" />
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./user.model";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanUserDto } from "./dto/ban-user.dto";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(userDto: CreateUserDto): Promise<User>;
    changePhoto(id: string, image: Express.Multer.File): Promise<User>;
    getAll(): Promise<User[]>;
    getOne(email: number): Promise<User>;
    addRole(dto: AddRoleDto): Promise<AddRoleDto>;
    ban(dto: BanUserDto): Promise<User>;
}

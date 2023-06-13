import { CreateUserDto } from "../users/dto/create-user.dto";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { FileService } from "../file/file.service";
export declare class AuthService {
    private userService;
    private jwtService;
    private fileService;
    constructor(userService: UsersService, jwtService: JwtService, fileService: FileService);
    login(userDto: CreateUserDto): Promise<{
        token: string;
    }>;
    registration(userDto: CreateUserDto): Promise<{
        token: string;
    }>;
    private generateToken;
    private validateUser;
}

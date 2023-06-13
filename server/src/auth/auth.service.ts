import {HttpException, HttpStatus, Injectable, UnauthorizedException} from "@nestjs/common";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcryptjs'
import {User} from "../users/user.model";
import {FileService, FileType} from "../file/file.service";

@Injectable()
export class AuthService {
    constructor(private userService: UsersService,
                private jwtService: JwtService,
                private fileService: FileService) {}

    async login(userDto: CreateUserDto) {
        const user = await this.validateUser(userDto)
        return this.generateToken(user)
    }

    async registration(userDto: CreateUserDto) {
        const candidate = await this.userService.getUsersByEmail(userDto.email)

        if(candidate) {
            throw new HttpException('User with this email already exist', HttpStatus.BAD_REQUEST)
        }

        const user = await this.userService.createUser(userDto)
        return this.generateToken(user)
    }

    private async generateToken(user: User) {
        const payload = {email: user.email, id: user.id, roles: user.roles}
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(userDto: CreateUserDto) {
        const user = await this.userService.getUsersByEmail(userDto.email)
        let passwordEquals = await bcrypt.compare(userDto.password, user.password)
        if(!passwordEquals) {
            passwordEquals = userDto.password === user.password
        }
        if(user && passwordEquals) {
            console.log(passwordEquals)
            return user
        }
        throw new UnauthorizedException({message: 'Wrong email or password'})
    }
}
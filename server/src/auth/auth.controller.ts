import {Body, Controller, Post, UploadedFile, UseInterceptors} from "@nestjs/common";
import {AuthService} from "./auth.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "../users/user.model";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {FileInterceptor} from "@nestjs/platform-express";

@ApiTags('Auth')
@Controller('/auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @ApiOperation({summary: 'Registration'})
    @Post('/login')
    login(@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto)
    }

    @ApiOperation({summary: 'Registration'})
    @Post('/registration')
    registration(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto)
    }
}
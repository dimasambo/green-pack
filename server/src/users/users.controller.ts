import {
    Body,
    Controller,
    Get,
    Param,
    Post, Put, Query,
    UploadedFile,
    UploadedFiles,
    UseGuards,
    UseInterceptors,
    UsePipes
} from "@nestjs/common";
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./user.model";
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/role.guard";
import {AddRoleDto} from "./dto/add-role.dto";
import {BanUserDto} from "./dto/ban-user.dto";
import {ValidationPipe} from "../pipes/validation.pipe";
import {ObjectId} from "mongoose";
import {FileInterceptor, FilesInterceptor} from "@nestjs/platform-express";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@ApiTags('Users')
@Controller('/users')
export class UsersController {
    constructor(private usersService: UsersService) {
    }

    @ApiOperation({summary: 'Create user'})
    @ApiResponse({status: 200, type: User})
    /*@UsePipes(ValidationPipe)*/
    @UseInterceptors(FileInterceptor('image'))
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto)
    }

    @ApiOperation({summary: 'Change user avatar'})
    @UseInterceptors(FileInterceptor('image'))
    @Put()
    changePhoto(@Body() id: string,
                @UploadedFile() image: Express.Multer.File) {
        return this.usersService.updateUserPhoto(Number(id), image)
    }

    @ApiOperation({summary: 'Get users'})
    @ApiResponse({status: 200, type: [User]})
    /*@UseGuards(JwtAuthGuard)*/
    /*@Roles('ADMIN')
    @UseGuards(RolesGuard)*/
    @Get()
    getAll() {
        return this.usersService.getAllUsers()
    }

    @ApiOperation({summary: 'Get one user'})
    @ApiResponse({status: 200, type: User})
    @UseGuards(JwtAuthGuard)
    @Get('/current')
    getOne(@Query('email') email: number) {
        const stringifyEmail = String(email)
        return this.usersService.getUsersByEmail(stringifyEmail)
    }

    @ApiOperation({summary: 'Add role'})
    @ApiResponse({status: 200})
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Post('/role')
    addRole(@Body() dto: AddRoleDto) {
        return this.usersService.addRole(dto)
    }

    @ApiOperation({summary: 'Ban user'})
    @ApiResponse({status: 200})
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Post('/ban')
    ban(@Body() dto: BanUserDto) {
        return this.usersService.ban(dto)
    }

}
import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {RolesService} from "./roles.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Role} from "./role.model";
import {CreateRoleDto} from "./dto/create-role.dto";

@ApiTags('Roles')
@Controller('/roles')
export class RolesController {
    constructor(private rolesService: RolesService) {
    }

    @ApiOperation({summary: 'Create role'})
    @ApiResponse({status: 200, type: Role})
    @Post()
    create(@Body() roleDto: CreateRoleDto) {
        return this.rolesService.createRole(roleDto)
    }

    @ApiOperation({summary: 'Get role'})
    @ApiResponse({status: 200, type: Role})
    @Get('/:value')
    getRoleByValue(@Param('value') value: string) {
        return this.rolesService.getRoleByValue(value)
    }

}

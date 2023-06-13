import { RolesService } from "./roles.service";
import { Role } from "./role.model";
import { CreateRoleDto } from "./dto/create-role.dto";
export declare class RolesController {
    private rolesService;
    constructor(rolesService: RolesService);
    create(roleDto: CreateRoleDto): Promise<Role>;
    getRoleByValue(value: string): Promise<Role>;
}

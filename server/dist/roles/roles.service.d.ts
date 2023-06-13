import { CreateRoleDto } from "./dto/create-role.dto";
import { Role } from "./role.model";
export declare class RolesService {
    private RoleRepository;
    constructor(RoleRepository: typeof Role);
    createRole(dto: CreateRoleDto): Promise<Role>;
    getRoleByValue(value: string): Promise<Role>;
}

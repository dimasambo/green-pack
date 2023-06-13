import { Model } from "sequelize-typescript";
interface UserRolesCreationAttrs {
    value: string;
    description: string;
}
export declare class UserRoles extends Model<UserRoles, UserRolesCreationAttrs> {
    id: number;
    roleId: number;
    userId: number;
}
export {};

import { Model } from "sequelize-typescript";
import { Role } from "../roles/role.model";
import { Post } from "../posts/post.model";
interface UserCreationAttrs {
    email: string;
    password: string;
    image: string;
}
export declare class User extends Model<User, UserCreationAttrs> {
    id: number;
    email: string;
    password: string;
    image: string;
    banned: boolean;
    banReason: string;
    roles: Role[];
    posts: Post[];
}
export {};

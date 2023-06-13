import { Model } from "sequelize-typescript";
import { User } from "../users/user.model";
interface PostCreationAttrs {
    title: string;
    content: string;
    userId: number;
    images: string[];
}
export declare class Post extends Model<Post, PostCreationAttrs> {
    id: number;
    title: string;
    content: string;
    images: string[];
    userId: number;
    author: User;
}
export {};

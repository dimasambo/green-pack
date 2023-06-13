import { Model } from "sequelize-typescript";
import { User } from "../users/user.model";
interface PayAttentionCreationAttrs {
    title: string;
    content: string;
    userId: number;
    images: string[];
    payAttentions: number;
}
export declare class PayAttention extends Model<PayAttention, PayAttentionCreationAttrs> {
    id: number;
    title: string;
    content: string;
    images: string[];
    payAttentions: number;
    important: boolean;
    userId: number;
    author: User;
}
export {};

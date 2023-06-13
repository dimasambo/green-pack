import { HydratedDocument } from 'mongoose';
import { Comment } from "./comment.schema";
import * as mongoose from 'mongoose';
export type UserDocument = HydratedDocument<User>;
export declare class User {
    title: string;
    description: string;
    images: string[];
    videos: string[];
    publishedAt: string;
    author: Comment[];
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, mongoose.Document<unknown, any, User> & Omit<User & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User, mongoose.Document<unknown, {}, mongoose.FlatRecord<User>> & Omit<mongoose.FlatRecord<User> & {
    _id: mongoose.Types.ObjectId;
}, never>>;

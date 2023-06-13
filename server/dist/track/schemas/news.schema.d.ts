import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from "./user.schema";
export type NewsDocument = HydratedDocument<News>;
export declare class News {
    title: string;
    description: string;
    images: string[];
    videos: string[];
    publishedAt: string;
    author: User;
}
export declare const NewsSchema: mongoose.Schema<News, mongoose.Model<News, any, any, any, mongoose.Document<unknown, any, News> & Omit<News & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, News, mongoose.Document<unknown, {}, mongoose.FlatRecord<News>> & Omit<mongoose.FlatRecord<News> & {
    _id: mongoose.Types.ObjectId;
}, never>>;

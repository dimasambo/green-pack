import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';
import {Comment} from "./comment.schema";
import * as mongoose from 'mongoose'
import {User} from "./user.schema";

export type NewsDocument = HydratedDocument<News>;

@Schema()
export class News {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    images: string[];

    @Prop()
    videos: string[];

    @Prop()
    publishedAt: string;

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]})
    author: User;
}

export const NewsSchema = SchemaFactory.createForClass(News);
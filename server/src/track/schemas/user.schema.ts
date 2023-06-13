import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';
import {Comment} from "./comment.schema";
import * as mongoose from 'mongoose'

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
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
    author: Comment[];
}

export const UserSchema = SchemaFactory.createForClass(User);
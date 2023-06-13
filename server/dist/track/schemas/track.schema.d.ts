import { HydratedDocument } from 'mongoose';
import { Comment } from "./comment.schema";
import * as mongoose from 'mongoose';
export type TrackDocument = HydratedDocument<Track>;
export declare class Track {
    name: string;
    artist: string;
    text: string;
    listens: number;
    picture: string;
    audio: string;
    comments: Comment[];
}
export declare const TrackSchema: mongoose.Schema<Track, mongoose.Model<Track, any, any, any, mongoose.Document<unknown, any, Track> & Omit<Track & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Track, mongoose.Document<unknown, {}, mongoose.FlatRecord<Track>> & Omit<mongoose.FlatRecord<Track> & {
    _id: mongoose.Types.ObjectId;
}, never>>;

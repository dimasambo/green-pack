import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";
import {FileModule} from "./file/file.module";
import * as path from 'path'
import {ServeStaticModule} from "@nestjs/serve-static";
import {SequelizeModule} from "@nestjs/sequelize";
import {UsersModule} from "./users/users.module";
import {ConfigModule} from "@nestjs/config";
import {User} from "./users/user.model";
import { RolesModule } from './roles/roles.module';
import {Role} from "./roles/role.model";
import {UserRoles} from "./roles/user-roles.model";
import {AuthModule} from "./auth/auth.module";
import { PostsModule } from './posts/posts.module';
import {Post} from "./posts/post.model";
import { PayAttentionsModule } from './pay-attention/pay-attentions.module';
import {PayAttention} from "./pay-attention/pay-attention.model";

/*@Module({
    imports: [
        ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
        MongooseModule.forRoot('mongodb+srv://dimaruy:dimMongodb3@cluster0.nycsqpv.mongodb.net/?retryWrites=true&w=majority'),
        TrackModule,
        FileModule
    ]
})*/
@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static')
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            /*host: process.env.POSTGRES_HOST,*/
            host: 'localhost',
            /*port: Number(process.env.POSTGRES_PORT),*/
            port: 5432,
            /*username: process.env.POSTGRES_USER,*/
            username: 'postgres',
            /*password: process.env.POSTGRES_PASSWORD,*/
            password: 'root',
            /*database: process.env.DB,*/
            database: 'eco-management',
            models: [User, Role, UserRoles, Post, PayAttention],
            autoLoadModels: true,
            synchronize: true
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        PostsModule,
        FileModule,
        PayAttentionsModule
    ],
    controllers: [],
    providers: []
})
export class AppModule {}
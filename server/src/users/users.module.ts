import {forwardRef, Module} from "@nestjs/common";
import {UsersController} from "./users.controller";
import {UsersService} from "./users.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./user.model";
import {Role} from "../roles/role.model";
import {UserRoles} from "../roles/user-roles.model";
import {RolesModule} from "../roles/roles.module";
import {AuthModule} from "../auth/auth.module";
import {Post} from "../posts/post.model";
import {FileModule} from "../file/file.module";
import {PayAttention} from "../pay-attention/pay-attention.model";

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [
        SequelizeModule.forFeature([User, Role, UserRoles, Post, PayAttention]),
        RolesModule,
        FileModule,
        forwardRef(() => AuthModule)
    ],
    exports: [
        UsersService,
    ]
})
export class UsersModule {}
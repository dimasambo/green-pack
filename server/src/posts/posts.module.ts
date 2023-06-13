import {forwardRef, Module} from '@nestjs/common';
import {PostsController} from './posts.controller';
import {PostsService} from './posts.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/user.model";
import {Post} from "./post.model";
import {FileModule} from "../file/file.module";
import {AuthModule} from "../auth/auth.module";

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [
    SequelizeModule.forFeature([User, Post]),
      FileModule,
    forwardRef(() => AuthModule)
  ],
})
export class PostsModule {}

import {forwardRef, Module} from '@nestjs/common';
import {PayAttentionsController} from './pay-attentions.controller';
import {PayAttentionsService} from './pay-attentions.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/user.model";
import {FileModule} from "../file/file.module";
import {AuthModule} from "../auth/auth.module";
import {PayAttention} from "./pay-attention.model";

@Module({
  controllers: [PayAttentionsController],
  providers: [PayAttentionsService],
  imports: [
    SequelizeModule.forFeature([User, PayAttention]),
    FileModule,
    forwardRef(() => AuthModule)
  ],
})
export class PayAttentionsModule {}

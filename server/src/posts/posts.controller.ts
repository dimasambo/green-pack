import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Query,
    UploadedFile,
    UploadedFiles,
    UseGuards,
    UseInterceptors
} from '@nestjs/common';
import {ApiOperation} from "@nestjs/swagger";
import {PostsService} from "./posts.service";
import {CreatePostDto} from "./dto/create-post.dto";
import {FileFieldsInterceptor, FileInterceptor, FilesInterceptor} from "@nestjs/platform-express";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {ObjectId} from "mongoose";

@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) {
    }

    @ApiOperation({summary: 'Create post'})
    @Post()
    @UseInterceptors(FileFieldsInterceptor([{name: 'images', maxCount: 1}]))
    create(@Body() dto: CreatePostDto,
           @UploadedFiles() file: { images?: Express.Multer.File[]}) {
        return this.postsService.createPost(dto, file.images[0])
    }

    @ApiOperation({summary: 'Get posts'})
    @Get(':userId')
    async getByUserId(@Param('userId') userId: number) {
        return this.postsService.getPostsByUserId(userId)
    }

    @ApiOperation({summary: 'Get posts'})
    @Get()
    async getAll(/*@Query('offset') offset?: number,
                 @Query('count') count?: number*/) {
        return this.postsService.getAllPosts(/*count, offset*/)
    }
}

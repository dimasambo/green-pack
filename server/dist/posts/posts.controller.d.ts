/// <reference types="multer" />
import { PostsService } from "./posts.service";
import { CreatePostDto } from "./dto/create-post.dto";
export declare class PostsController {
    private postsService;
    constructor(postsService: PostsService);
    create(dto: CreatePostDto, file: {
        images?: Express.Multer.File[];
    }): Promise<import("./post.model").Post[]>;
    getByUserId(userId: number): Promise<import("./post.model").Post[]>;
    getAll(): Promise<import("./post.model").Post[]>;
}

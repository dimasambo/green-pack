import { CreatePostDto } from "./dto/create-post.dto";
import { Post } from "./post.model";
import { FileService } from "../file/file.service";
export declare class PostsService {
    private postRepository;
    private fileService;
    constructor(postRepository: typeof Post, fileService: FileService);
    createPost(dto: CreatePostDto, image: any): Promise<Post[]>;
    getPostsByUserId(userId: any): Promise<Post[]>;
    getAllPosts(count?: number, offset?: number): Promise<Post[]>;
}

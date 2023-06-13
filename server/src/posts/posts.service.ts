import {Injectable} from '@nestjs/common';
import {CreatePostDto} from "./dto/create-post.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Post} from "./post.model";
import {FileService, FileType} from "../file/file.service";

@Injectable()
export class PostsService {
    constructor(@InjectModel(Post) private postRepository: typeof Post,
                private fileService: FileService) {}

    async createPost(dto: CreatePostDto, image: /*Array<*/any/*>*/) {
        /*const imageNames: string[] = []*/
        /*for (const image of images) {*/
            const imageName = await this.fileService.createFile(FileType.PICTURE, image)
            /*imageNames.push(imageName)
        }*/
        await this.postRepository.create({...dto, images: [imageName]})
        return await this.postRepository.findAll({where: {userId: dto.userId}, include: {all: true}})
    }

    async getPostsByUserId(userId) {
        return await this.postRepository.findAll({where: {userId}, include: {all: true}})
    }

    async getAllPosts(count = 10, offset = 0) {
        return await this.postRepository.findAll({offset: offset, limit: 100, include: {all: true}})
    }
}

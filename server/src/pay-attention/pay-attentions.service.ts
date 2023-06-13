import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {FileService, FileType} from "../file/file.service";
import {PayAttention} from "./pay-attention.model";
import {CreatePayAttentionDto} from "./dto/create-pay-attention.dto";

@Injectable()
export class PayAttentionsService {
    constructor(@InjectModel(PayAttention) private payAttentionRepository: typeof PayAttention,
                private fileService: FileService) {}

    async createPayAttention(dto: CreatePayAttentionDto, image: /*Array<*/any/*>*/) {
        /*const imageNames: string[] = []*/
        /*for (const image of images) {*/
        const imageName = await this.fileService.createFile(FileType.PICTURE, image)
        /*imageNames.push(imageName)
    }*/
        await this.payAttentionRepository.create({...dto, images: [imageName], payAttentions: 0})
        return await this.payAttentionRepository.findAll({where: {userId: dto.userId}, include: {all: true}})
    }

    async getPayAttentionsByUserId(userId) {
        return await this.payAttentionRepository.findAll({where: {userId}, include: {all: true}})
    }

    async getAllPayAttentions(count = 10, offset = 0) {
        return await this.payAttentionRepository.findAll({offset: offset, limit: 30, include: {all: true}})
    }

    async getImportantPayAttentions() {
        return await this.payAttentionRepository.findAll({where: {important: true}, include: {all: true}})
    }

    async increasePayAttentions(id: number) {
        const payAttention = await this.payAttentionRepository.findByPk(id)
        if(payAttention.payAttentions === 0) {
            payAttention.important = true
        }
        payAttention.payAttentions += 1
        await payAttention.save()
        return payAttention
    }
}

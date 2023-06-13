/// <reference types="multer" />
import { PayAttentionsService } from "./pay-attentions.service";
import { CreatePayAttentionDto } from "./dto/create-pay-attention.dto";
export declare class PayAttentionsController {
    private payAttentionService;
    constructor(payAttentionService: PayAttentionsService);
    create(dto: CreatePayAttentionDto, file: {
        images?: Express.Multer.File[];
    }): Promise<import("./pay-attention.model").PayAttention[]>;
    getImportant(): Promise<import("./pay-attention.model").PayAttention[]>;
    getByUserId(userId: number): Promise<import("./pay-attention.model").PayAttention[]>;
    getAll(): Promise<import("./pay-attention.model").PayAttention[]>;
    increasePayAttention(id: number): Promise<import("./pay-attention.model").PayAttention>;
}

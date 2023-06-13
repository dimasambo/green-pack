import { FileService } from "../file/file.service";
import { PayAttention } from "./pay-attention.model";
import { CreatePayAttentionDto } from "./dto/create-pay-attention.dto";
export declare class PayAttentionsService {
    private payAttentionRepository;
    private fileService;
    constructor(payAttentionRepository: typeof PayAttention, fileService: FileService);
    createPayAttention(dto: CreatePayAttentionDto, image: any): Promise<PayAttention[]>;
    getPayAttentionsByUserId(userId: any): Promise<PayAttention[]>;
    getAllPayAttentions(count?: number, offset?: number): Promise<PayAttention[]>;
    getImportantPayAttentions(): Promise<PayAttention[]>;
    increasePayAttentions(id: number): Promise<PayAttention>;
}

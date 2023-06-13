import {Body, Controller, Get, Param, Post, Put, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {ApiOperation} from "@nestjs/swagger";
import {FileFieldsInterceptor} from "@nestjs/platform-express";
import {PayAttentionsService} from "./pay-attentions.service";
import {CreatePayAttentionDto} from "./dto/create-pay-attention.dto";

@Controller('pay-attention')
export class PayAttentionsController {
    constructor(private payAttentionService: PayAttentionsService) {
    }

    @ApiOperation({summary: 'Create post'})
    @Post()
    @UseInterceptors(FileFieldsInterceptor([{name: 'images', maxCount: 1}]))
    create(@Body() dto: CreatePayAttentionDto,
           @UploadedFiles() file: { images?: Express.Multer.File[]}) {
        return this.payAttentionService.createPayAttention(dto, file.images[0])
    }

    @ApiOperation({summary: 'Get posts'})
    @Get('/important')
    async getImportant() {
        return this.payAttentionService.getImportantPayAttentions()
    }

    @ApiOperation({summary: 'Get posts'})
    @Get(':userId')
    async getByUserId(@Param('userId') userId: number) {
        return this.payAttentionService.getPayAttentionsByUserId(userId)
    }

    @ApiOperation({summary: 'Get posts'})
    @Get()
    async getAll(/*@Query('offset') offset?: number,
                 @Query('count') count?: number*/) {
        return this.payAttentionService.getAllPayAttentions(/*count, offset*/)
    }

    @ApiOperation({summary: 'Get posts'})
    @Put(':id')
    async increasePayAttention(@Param('id') id: number) {
        return this.payAttentionService.increasePayAttentions(id)
    }
}

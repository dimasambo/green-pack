import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Post, Query,
    UploadedFiles,
    UseInterceptors
} from "@nestjs/common";
import {TrackService} from "./track.service";
import {CreateTrackDto} from "./dto/create-track.dto";
import {ObjectId} from "mongoose";
import {CreateCommentDto} from "./dto/create-comment.dto";
import {FileFieldsInterceptor} from "@nestjs/platform-express";

@Controller('/Tracks')
export class TrackController {
    constructor(private TrackService: TrackService) {
    }

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        {name: 'picture', maxCount: 1},
        {name: 'audio', maxCount: 1},
    ]))
    @HttpCode(HttpStatus.CREATED)
    create(@UploadedFiles() files: { picture?: Express.Multer.File[], audio?: Express.Multer.File[] },
           @Body() dto: CreateTrackDto) {
        return this.TrackService.create(dto, files.picture[0], files.audio[0])
    }

    @Get()
    getAll(@Query('count') count: number,
           @Query('offset') offset: number) {
        return this.TrackService.getAll(count, offset)
    }

    @Get('/search')
    search(@Query('query') query: string) {
        return this.TrackService.search(query)
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.TrackService.getOne(id)
    }

    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.TrackService.delete(id)
    }

    @Post('/comment')
    @HttpCode(HttpStatus.CREATED)
    addComment(@Body() dto: CreateCommentDto) {
        return this.TrackService.addComment(dto)
    }

    @Post('/listen/:id')
    @HttpCode(HttpStatus.OK)
    listen(@Param('id') id: ObjectId) {
        return this.TrackService.listen(id)
    }
}
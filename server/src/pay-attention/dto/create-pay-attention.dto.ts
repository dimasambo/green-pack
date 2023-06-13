import {ApiProperty} from "@nestjs/swagger";

export class CreatePayAttentionDto {
    @ApiProperty({example: 'title', description: `Post's title`})
    readonly title: string

    @ApiProperty({example: 'post content', description: `Post's content`})
    readonly content: string

    @ApiProperty({example: '123456', description: 'User id'})
    readonly userId: number
}
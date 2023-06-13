import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/role.model";
import {UserRoles} from "../roles/user-roles.model";
import {User} from "../users/user.model";

interface PostCreationAttrs {
    title: string
    content: string
    userId: number
    images: string[]
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttrs> {
    @ApiProperty({example: '1', description: 'Unique id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'title', description: `Post's title`})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string;

    @ApiProperty({example: 'post content', description: `Post's content`})
    @Column({type: DataType.STRING, allowNull: false})
    content: string;

    @ApiProperty({example: "['1.png', '2.png']", description: `Images`})
    @Column({type: DataType.ARRAY(DataType.STRING)})
    images: string[];

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(() => User)
    author: User
}
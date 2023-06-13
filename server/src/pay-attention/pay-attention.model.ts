import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/user.model";

interface PayAttentionCreationAttrs {
    title: string
    content: string
    userId: number
    images: string[]
    payAttentions: number
}

@Table({tableName: 'pay-attention'})
export class PayAttention extends Model<PayAttention, PayAttentionCreationAttrs> {
    @ApiProperty({example: '1', description: 'Unique id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'title', description: `Pay attention's title`})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string;

    @ApiProperty({example: 'Pay attention content', description: `Pay attention's content`})
    @Column({type: DataType.STRING, allowNull: false})
    content: string;

    @ApiProperty({example: "['1.png', '2.png']", description: `Images`})
    @Column({type: DataType.ARRAY(DataType.STRING)})
    images: string[];

    @ApiProperty({example: "37", description: `Count of pay attentions`})
    @Column({type: DataType.INTEGER})
    payAttentions: number;

    @ApiProperty({example: "true", description: `Important pay attention or not`})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    important: boolean;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(() => User)
    author: User
}
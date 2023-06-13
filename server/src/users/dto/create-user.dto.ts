import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'user@gmail.com', description: 'Email'})
    @IsString({message: 'should be string'})
    @IsEmail({}, {message: 'wrong email'})
    readonly email: string
    @ApiProperty({example: '1234qwer', description: 'Password'})
    @IsString({message: 'should be string'})
    @Length(4, 16, {message: 'Password should be from 4 to 16 symbols'})
    readonly password: string
}
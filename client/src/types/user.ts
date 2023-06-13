import {IPost} from "./post";
import {IRole} from "./role";

export interface IUser {
    id: number
    email: string
    password: string
    image: string
    banned: boolean
    banReason: string
    roles: IRole[]
    posts: IPost[]
}

export interface ICreateUser {
    email: string
    password: string
    image: string
}
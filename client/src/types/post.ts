import {IUser} from "./user";

export interface IPost {
    id: number
    title: string
    content: string
    images: string[]
    userId: number
    author: IUser
    createdAt: string
    updatedAt: string
}

export interface ICreatePost {
    title: string
    content: string
    userId: number
    images: File[]
}
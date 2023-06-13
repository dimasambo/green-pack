import {IUser} from "./user";

export interface IPayAttention {
    id: number
    title: string
    content: string
    images: string[]
    userId: number
    author: IUser
    createdAt: string
    updatedAt: string
    payAttentions: number
    important: boolean
}

export interface ICreatePayAttention {
    title: string
    content: string
    userId: number
    images: File[]
}
import {IUser} from "./user";

export interface IRole {
    id: number
    value: string
    description: string
    users: IUser[]
}
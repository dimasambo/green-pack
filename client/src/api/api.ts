import axios from "axios";
import {ITrack} from "../types/track";
import {ICreateUser, IUser} from "../types/user";
import {ICreatePost, IPost} from "../types/post";
import {IPayAttention} from "../types/pay-attention";

let token: string

export const authApi = {
    login(email: string, password: string) {
        return axios.post<any>(`http://localhost:3000/auth/login`, {email, password})
            .then(response => {
                token = response.data.token
                return response.data
            })
    },

    register(email: string, password: string) {
        return axios.post<IUser>(`http://localhost:3000/auth/registration`, {email, password})
            .then(response => response.data)
    },

    logout() {
        token = ''
    },

    getUser(email: string) {
        return axios.get<IUser>(`http://localhost:3000/users/current?email=${email}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.data)
    },

    updateUserPhoto(id: number, image: File) {
        return axios.put<IUser>(`http://localhost:3000/users`, {id: id, image: image})
            .then(response => response.data)
    },

    createUser(formData: {email: string, password: string, image: File}) {
        return axios.post<IUser>(`http://localhost:3000/users`, formData)
            .then(response => response.data)
    },

    getTracks() {
        return axios.get<ITrack[]>(`http://localhost:3000/tracks`)
            .then(response => response.data)
    },

    getTrack(id: string) {
        return axios.get<ITrack>(`http://localhost:3000/tracks/` + id)
            .then(response => response.data)
    },

    setTrack(track: ITrack) {
        console.log(track)
        return axios.post<ITrack>(`http://localhost:3000/tracks`, track)
            .then(response => response.data)
    },

    /*getComments(track: any) {
        return axios.post<ITrack>(`http://localhost:3000/tracks`, track)
            .then(response => response.data)
    },*/

    setComment(comment: any) {
        return axios.post<any>(`http://localhost:3000/tracks/comment`, comment)
            .then(response => response.data)
    }
}

export const postApi = {
    getPostsByUserId(userId: string) {
        return axios.get<IPost[]>(`http://localhost:3000/posts/${userId}`)
            .then(response => response.data)
    },

    setPost(post: ICreatePost) {
        return axios.post<IPost[]>(`http://localhost:3000/posts`, post, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(response => response.data)
    },

    getAllPost(offset = 0) {
        return axios.get<IPost[]>(`http://localhost:3000/posts`)
            .then(response => response.data)
    }
}

export const payAttentionsApi = {
    getPayAttentionsByUserId(userId: string) {
        return axios.get<IPayAttention[]>(`http://localhost:3000/pay-attention/${userId}`)
            .then(response => response.data)
    },

    setPayAttention(payAttention: ICreatePost) {
        return axios.post<IPayAttention[]>(`http://localhost:3000/pay-attention`, payAttention, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(response => response.data)
    },

    getAllPayAttentions(offset = 0) {
        return axios.get<IPayAttention[]>(`http://localhost:3000/pay-attention`)
            .then(response => response.data)
    },

    getImportantPayAttentions() {
        return axios.get<IPayAttention[]>(`http://localhost:3000/pay-attention/important`)
            .then(response => response.data)
    },

    increasePayAttentions(id: number) {
        return axios.put<IPayAttention>(`http://localhost:3000/pay-attention/${id}`)
            .then(response => response.data)
    }
}
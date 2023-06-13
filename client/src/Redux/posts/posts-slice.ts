import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ITrack} from "../../types/track";
import {authApi, postApi} from "../../api/api";
import {ICreatePost, IPost} from "../../types/post";

const initialState = {
    allPosts: [] as IPost[],
    posts: [] as IPost[],
    error: ''
}

export type InitialStateType = typeof initialState

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(requestPostsByUserId.fulfilled, (state: InitialStateType, action) => {
                state.posts = action.payload
                state.error = ''
            })
            .addCase(requestPostsByUserId.rejected, (state: InitialStateType) => {
                state.error = 'Error occurred while loading posts'
            })
            .addCase(setPost.fulfilled, (state: InitialStateType, action) => {
                state.posts = action.payload
                state.error = ''
            })
            .addCase(setPost.rejected, (state: InitialStateType) => {
                state.error = 'Error occurred while creating post'
            })
            .addCase(requestAllPosts.fulfilled, (state: InitialStateType, action) => {
                state.allPosts = action.payload
                state.error = ''
            })
            .addCase(requestAllPosts.rejected, (state: InitialStateType) => {
                state.error = 'Error occurred while creating post'
            })
    },
});

export const {} = postsSlice.actions

export const requestPostsByUserId = createAsyncThunk(
    'posts/requestPosts',
    async (userId: string) => {
        const data: IPost[] = await postApi.getPostsByUserId(userId);
        return data;
    }
)

export const setPost = createAsyncThunk(
    'posts/setPost',
    async (post: ICreatePost) => {
        const data: IPost[] = await postApi.setPost(post);
        return data;
    }
)

export const requestAllPosts = createAsyncThunk(
    'posts/requestAllPosts',
    async (offset?: number) => {
        const data: IPost[] = await postApi.getAllPost(offset);
        return data;
    }
)

export default postsSlice.reducer;
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ITrack} from "../../types/track";
import {authApi, payAttentionsApi, postApi} from "../../api/api";
import {ICreatePost, IPost} from "../../types/post";
import {IPayAttention} from "../../types/pay-attention";

const initialState = {
    allPayAttentions: [] as IPayAttention[],
    importantPayAttentions: [] as IPayAttention[],
    userPayAttentions: [] as IPayAttention[],
    error: ''
}

export type InitialStateType = typeof initialState

const payAttentionsSlice = createSlice({
    name: "pay-attentions",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(requestPayAttentionsByUserId.fulfilled, (state: InitialStateType, action) => {
                state.userPayAttentions = action.payload
                state.error = ''
            })
            .addCase(requestPayAttentionsByUserId.rejected, (state: InitialStateType) => {
                state.error = 'Error occurred while loading pay attentions'
            })
            .addCase(setPayAttention.fulfilled, (state: InitialStateType, action) => {
                state.userPayAttentions = action.payload
                state.error = ''
            })
            .addCase(setPayAttention.rejected, (state: InitialStateType) => {
                state.error = 'Error occurred while creating pay attentions'
            })
            .addCase(requestAllPayAttentions.fulfilled, (state: InitialStateType, action) => {
                state.allPayAttentions = action.payload
                state.error = ''
            })
            .addCase(requestAllPayAttentions.rejected, (state: InitialStateType) => {
                state.error = 'Error occurred while loading pay attentions'
            })
            .addCase(increasePayAttentions.fulfilled, (state: InitialStateType, action) => {
                state.error = ''
            })
            .addCase(increasePayAttentions.rejected, (state: InitialStateType) => {
                state.error = 'Error occurred while increasing pay attentions'
            })
            .addCase(requestImportantPayAttentions.fulfilled, (state: InitialStateType, action) => {
                state.importantPayAttentions = action.payload
                state.error = ''
            })
            .addCase(requestImportantPayAttentions.rejected, (state: InitialStateType) => {
                state.error = 'Error occurred while loading pay attentions'
            })
    },
});

export const {} = payAttentionsSlice.actions

export const requestPayAttentionsByUserId = createAsyncThunk(
    'pay-attentions/requestPayAttentionsByUserId',
    async (userId: string) => {
        const data: IPayAttention[] = await payAttentionsApi.getPayAttentionsByUserId(userId);
        return data;
    }
)

export const setPayAttention = createAsyncThunk(
    'pay-attentions/setPayAttention',
    async (post: ICreatePost) => {
        const data: IPayAttention[] = await payAttentionsApi.setPayAttention(post);
        return data;
    }
)

export const requestAllPayAttentions = createAsyncThunk(
    'pay-attentions/requestAllPayAttentions',
    async (offset?: number) => {
        const data: IPayAttention[] = await payAttentionsApi.getAllPayAttentions(offset);
        return data;
    }
)

export const increasePayAttentions = createAsyncThunk(
    'pay-attentions/increasePayAttentions',
    async (id: number) => {
        const data: IPayAttention = await payAttentionsApi.increasePayAttentions(id);
        return data;
    }
)

export const requestImportantPayAttentions = createAsyncThunk(
    'pay-attentions/requestImportantPayAttentions',
    async () => {
        const data: IPayAttention[] = await payAttentionsApi.getImportantPayAttentions();
        return data;
    }
)

export default payAttentionsSlice.reducer;
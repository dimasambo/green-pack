import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITrack} from "../../types/track";
import {requestTrack, requestTracks} from "../track/track-slice";
import {authApi} from "../../api/api";

const initialState = {
    comments: [] as any
}

export type InitialStateType = typeof initialState

const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        /*builder
            .addCase(setComment.fulfilled, (state: InitialStateType, action) => {
                state.comments = action.payload
            })*/
    },
});

export const {} = commentSlice.actions

/*export const requestComments = createAsyncThunk(
    'comment/requestComments',
    async () => {
        const data: any = await api.getComments();
        return data;
    }
)*/

export const setComment = createAsyncThunk(
    'comment/setComment',
    async (comment: any) => {
        const data: any = await authApi.setComment(comment);
        return data;
    }
)

export default commentSlice.reducer;
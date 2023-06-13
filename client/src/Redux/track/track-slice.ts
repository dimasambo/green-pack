import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITrack} from "../../types/track";
import {act} from "react-dom/test-utils";
import {authApi} from "../../api/api";

const initialState = {
    tracks: [] as ITrack[],
    track: null as ITrack | null,
    error: ''
}

export type InitialStateType = typeof initialState

const trackSlice = createSlice({
    name: "player",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(requestTracks.fulfilled, (state: InitialStateType, action) => {
                state.tracks = action.payload
                state.error = ''
            })
            .addCase(requestTracks.rejected, (state: InitialStateType) => {
                state.error = 'Error occurred while loading tracks'
            })
            .addCase(requestTrack.fulfilled, (state: InitialStateType, action) => {
                state.track = action.payload
            })
    },
});

export const {} = trackSlice.actions

export const requestTracks = createAsyncThunk(
    'track/requestTracks',
    async () => {
        const data: ITrack[] = await authApi.getTracks();
        return data;
    }
)

export const setTrack = createAsyncThunk(
    'track/setTrack',
    async (track: any) => {
        const data: ITrack = await authApi.setTrack(track);
        return data;
    }
)

export const requestTrack = createAsyncThunk(
    'track/requestTrack',
    async (id: string) => {
        const data: ITrack = await authApi.getTrack(id);
        return data;
    }
)

export default trackSlice.reducer;
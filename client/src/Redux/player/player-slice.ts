import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITrack} from "../../types/track";

const initialState = {
    pause: true,
    currentTime: 0,
    volume: 50,
    duration: 0,
    active: null as ITrack | null
}

export type InitialStateType = typeof initialState

const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        pauseTrack(state: InitialStateType) {
            state.pause = true
        },
        playTrack(state: InitialStateType) {
            state.pause = false
        },
        setCurrentTime(state: InitialStateType, action: PayloadAction<number>) {
            state.currentTime = action.payload
        },
        setVolume(state: InitialStateType, action: PayloadAction<number>) {
            state.volume = action.payload
        },
        setDuration(state: InitialStateType, action: PayloadAction<number>) {
            state.duration = action.payload
        },
        setActive(state: InitialStateType, action: PayloadAction<ITrack>) {
            state.active = action.payload
            state.duration = 0
            state.currentTime = 0
        },
    }
});

export const {pauseTrack, playTrack, setActive, setCurrentTime, setDuration, setVolume} = playerSlice.actions

export default playerSlice.reducer;
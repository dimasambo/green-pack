import {Action, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ITrack} from "../../types/track";
import {authApi} from "../../api/api";
import {ICreateUser, IUser} from "../../types/user";

const initialState = {
    isAuthorized: false,
    currentUser: null as IUser | null,
    error: ''
}

export type InitialStateType = typeof initialState

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthorized(state: InitialStateType) {
            state.isAuthorized = true
        },
        setError(state: InitialStateType) {
            state.error = 'Something went wrong...'
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state: InitialStateType, action) => {
                state.currentUser = action.payload
                state.isAuthorized = true
            })
            .addCase(login.rejected, (state: InitialStateType) => {
                state.error = 'Something went wrong...'
                state.isAuthorized = false
            })
            .addCase(register.fulfilled, (state: InitialStateType, action) => {
                state.currentUser = action.payload
                state.isAuthorized = true
            })
            .addCase(register.rejected, (state: InitialStateType) => {
                state.error = 'Something went wrong...'
                state.isAuthorized = false
            })
            .addCase(logout.fulfilled, (state: InitialStateType) => {
                state.isAuthorized = false
            })
    },
});

export const {setError, setAuthorized} = authSlice.actions

export const login = createAsyncThunk(
    'auth/login',
    async ({email, password}: { email: string, password: string }) => {
        console.log(email, password)
        await authApi.login(email, password);
        const data: IUser = await authApi.getUser(email);
        return data
    }
)

export const register = createAsyncThunk(
    'auth/register',
    async ({email, password}: { email: string, password: string }) => {
        await authApi.register(email, password);
        await authApi.login(email, password);
        const data: IUser = await authApi.getUser(email);
        return data;
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        await authApi.logout();
    }
)

export const updateUserPhoto = createAsyncThunk(
    'auth/updateUserPhoto',
    async ({id, image}: {id: number, image: File}) => {
        await authApi.updateUserPhoto(id, image);
    }
)

export const createUser = createAsyncThunk(
    'auth/createUser',
    async (formData: {email: string, password: string, image: File}) => {
        await authApi.createUser(formData);
    }
)

export const setTrack = createAsyncThunk(
    'auth/setTrack',
    async (track: any) => {
        const data: ITrack = await authApi.setTrack(track);
        return data;
    }
)

export const requestTrack = createAsyncThunk(
    'auth/requestTrack',
    async (id: string) => {
        const data: ITrack = await authApi.getTrack(id);
        return data;
    }
)

export default authSlice.reducer;
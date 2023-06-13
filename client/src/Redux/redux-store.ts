import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import playerSlice from "./player/player-slice";
import trackSlice from "./track/track-slice";
import authSlice from "./auth/auth-slice";
import postsSlice from "./posts/posts-slice";
import payAttentionsSlice from "./pay-attentions/pay-attentions-slice";

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
}

const rootReducer = combineReducers({
    player: playerSlice,
    track: trackSlice,
    auth: authSlice,
    post: postsSlice,
    payAttention: payAttentionsSlice
})

export type RootReducerType = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer<RootReducerType>(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);
export type State = ReturnType<typeof persistedReducer>;

export default store;
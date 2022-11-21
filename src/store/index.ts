import {configureStore} from "@reduxjs/toolkit";
import {fakeStoreAPI} from "./fakeStoreAPI";

export const store = configureStore({
    reducer: {
        [fakeStoreAPI.reducerPath]: fakeStoreAPI.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(fakeStoreAPI.middleware)
});

export type RootState = ReturnType<typeof fakeStoreAPI.reducer>;

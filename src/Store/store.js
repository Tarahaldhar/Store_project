import { configureStore } from "@reduxjs/toolkit";
import * as MasterReducer from './MasterLogin/MasterLoginReducer';
import * as Token from './Token/TokenReducer';
export const store = configureStore({
    reducer: {
        masterLogin: MasterReducer.reducer,
        token: Token.reducer
    }
})

export default store;

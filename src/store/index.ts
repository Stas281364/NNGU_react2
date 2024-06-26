import { configureStore } from "@reduxjs/toolkit";
import { userDataSlice } from "./UserData";

export const rootStore = configureStore ({

    reducer: {
        [userDataSlice.name]: userDataSlice.reducer
    },
    devTools: true,

})
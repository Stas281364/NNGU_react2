import { createSlice, isAction } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type user ={

    id: number | null;
    name: string | null;
    second_name: string | null; 
    
}

type userdataslice = {
    userdata: user,
    isloading: boolean
    auth: boolean ;
}

const initialStates : userdataslice = {
    userdata: {
        id: null,
        name: null,
        second_name: null,
        
    },
    isloading: false,
    auth: false,
    
}

export const userDataSlice = createSlice({
    name: "userdataslice",
    initialState:initialStates,
    reducers: {

        setUserData: (state, action) =>{
            state.userdata = action.payload;
        },

        setisloading: (state, action:PayloadAction<boolean>) =>{
            //return {...state, isloading: action.payload}
            state.isloading = action.payload
        },

        setAuth: (state, action:PayloadAction<boolean>) => {
            state.auth = action.payload
        }
    },

    selectors:{
        getid: (state)=> state.userdata.id,
        getname: (state)=> state.userdata.name,
        getsecond_name: (state)=> state.userdata.second_name,
        getisloading: (state) => state.isloading,
        getAuth: (state)=> state.auth,
    }

})

export const {setUserData, setisloading, setAuth} = userDataSlice.actions

export const {getid, getname, getsecond_name, getisloading, getAuth} = userDataSlice.selectors
import { createSlice } from "@reduxjs/toolkit";
 export const Jobsslice= createSlice({
    name:'jobs',
    initialState:{
        items:[],
        selectedjob:null
    },
    reducers:{
        selectjob(state,action) {
            state.selectedjob=action.payload;
        }
    }
})
export const{selectjob}=Jobsslice.actions
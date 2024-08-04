import { configureStore } from "@reduxjs/toolkit";
import { Jobsslice } from "./jobslice/Jobslice";

const store= configureStore({
    reducer:{
        jobs:Jobsslice.reducer
    }
})


export default store;
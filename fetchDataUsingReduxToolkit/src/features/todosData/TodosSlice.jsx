import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDatas = createAsyncThunk ("TodosData/fetchData", async()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos")

    return res.data
})

const todosSlice = createSlice ({
    name : "todosData",
    initialState : {
        todos : [],
        isLoading : false,
        error : null
    },
    extraReducers : (builder) => {
        builder.addCase(fetchDatas.pending, (state) => {
            state.isLoading = true;
        })

        builder.addCase(fetchDatas.fulfilled, (state, action) => {
            state.isLoading = false;
            state.todos = action.payload;
            state.error = null
        })

        builder.addCase(fetchDatas.rejected, (state, action) => {
            state.isLoading = false;
            state.todos = []
            state.error = action.error.message
        })
    }
})

export default todosSlice.reducer
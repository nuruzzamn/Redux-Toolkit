import { configureStore } from "@reduxjs/toolkit";
import TodosSlice from "../../features/todosData/TodosSlice";

const store = configureStore({
    reducer : {
        todos : TodosSlice
    }
})

export default store
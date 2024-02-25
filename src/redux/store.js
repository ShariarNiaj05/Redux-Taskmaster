import { configureStore } from "@reduxjs/toolkit"
import tasksSlice from "./features/tasks/tasksSlice"
import userSlice from "./features/user/userSlice"

const store = configureStore({
    reducer: {
        tasksSlice: tasksSlice,
        userSlice: userSlice,
    },
    // middleware: 
})

export default store
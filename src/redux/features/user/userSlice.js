import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: "Shariar",
    email: "shariar@gmail.com",
    userTasks: []
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {

    }
})

export default userSlice.reducer
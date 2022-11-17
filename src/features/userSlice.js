import { createSlice } from "@reduxjs/toolkit";

const userData = localStorage.getItem('student-user') !== null ? JSON.parse(localStorage.getItem('student-user')) : {}

const initState = {
    user: userData
}


export const userSlice = createSlice({
    name: 'user',
    initialState: initState,
    reducers: {
        setUser: (state, action)=>{
            state.user = action.payload
            localStorage.setItem('student-user', JSON.stringify(action.payload))
        },
        clearUser: (state) => {
            localStorage.removeItem('student-user')
            state.user = {}
        }
    }
})

export const {setUser, clearUser} = userSlice.actions
export const getUserState = (state) => state.user
export default userSlice.reducer
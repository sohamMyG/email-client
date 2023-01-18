import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const emailSlice = createSlice({
    name:'email',
    initialState,
    reducers:{
        setEmails : (state,action) => {
            return action.payload
        }
    }
})

export const {setEmails} = emailSlice.actions
export default emailSlice.reducer

// export const initializeEmails = () => {

// } 



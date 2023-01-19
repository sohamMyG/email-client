import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    selected : '',
    favorite : [],
    read: []
}

const filterSlice = createSlice({
    name:'filter',
    initialState,
    reducers:{
        setFilter:(state,action)=>{
            return {...state, selected : action.payload}
        },
        addRead : (state,action) => {
            return {...state, read : [...state.read,action.payload]}
        },
        addFavorite : (state,action)=>{
            return {
                ...state, 
                favorite : [
                    ...state.favorite,
                    action.payload
                ]}
        },
        removeFavorite : (state,action) => {
            const favorite = state.favorite.filter(
                id  => id!==action.payload
            )
            // console.log(favorite)
            return {
                ...state,
                favorite
            }
        }
        
    }
})

export const {setFilter,addRead,addFavorite,removeFavorite} = filterSlice.actions
export default filterSlice.reducer
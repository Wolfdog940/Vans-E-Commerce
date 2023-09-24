import { createSlice } from "@reduxjs/toolkit";



const initialState:any ={
    filter : "defaultProduct"
}


export const filter = createSlice({
    name: "filter",
    initialState,
    reducers :{
        addFilter:(state, action)=>{
            state.filter  = action.payload
        }
    }

})

export const { addFilter } = filter.actions
export default filter.reducer
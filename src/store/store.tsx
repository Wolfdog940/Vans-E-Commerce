import { configureStore } from '@reduxjs/toolkit'
import  cart  from './addToCarSlice/addToCarSlice'
import filter from "./filterProductsSlice/filterProductsSlice"




const store = configureStore({
    reducer: {
        cart,
        filter
    }
    
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;


export default store;



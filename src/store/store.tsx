import { configureStore } from '@reduxjs/toolkit'
import  cart  from './addToCarSlice/addToCarSlice'




const store = configureStore({
    reducer: {
        cart
    }
    
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;


export default store;



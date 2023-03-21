import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
    id:Number, 
    name:string, 
    price:string, 
    image:string,
    quantity:number
}

export interface ProductState {
    products: Product[]
}

const initialState: ProductState = {
    products:[],
}





export const cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const isProductInCart = false;
            if(isProductInCart){
                //Agregar +1 en su cantidad.
            }else{
                state.products = [...state.products, action.payload]//para que no se reescriba el mismo state
            }
        },
        cleanCart:()=>initialState
    }
    
})


export const { addProduct } = cart.actions
export const { cleanCart } = cart.actions
export default cart.reducer
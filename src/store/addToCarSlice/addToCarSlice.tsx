import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

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
            const isProductInCart = state.products.some(p => p.id === action.payload.id);//some si alguno contiene y every si todos tienen
            if(isProductInCart){
                state.products = state.products.map(product => {
                    if(product.id === action.payload.id){
                        return {
                            ...product,
                            quantity: product.quantity + 1}
                    }
                    else{
                        return product
                    }
                })
            }
            else{
                state.products = [...state.products, action.payload]//para que no se reescriba el mismo state
                }
                
            localStorage.setItem("cart",JSON.stringify(state.products.map((item =>item))))
        },
        cleanCart:()=>initialState,
        deleteProduct:(state, action) =>{

            console.log("holsdfdsdfgdfa")
            console.log("hola")
            state.products = state.products.filter(product => product.id !== action.payload);// const index = state.products.findIndex(x=>x.id === action.payload)
            //     state.products.splice(index,1)
        }},
    })


export const { addProduct } = cart.actions
export const { cleanCart } =  cart.actions
export const { deleteProduct } = cart.actions
export default cart.reducer

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const unidos = [...arr1, ...arr2]
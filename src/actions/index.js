import {ADD_TO_CART,REMOVE_FROM_CART} from './actionTypes'
export const removeItem =(product)=>({
    type : REMOVE_FROM_CART,
    payload : product
})

export const addItemToCart =(product)=>({
    type : ADD_TO_CART,
    payload : product
})
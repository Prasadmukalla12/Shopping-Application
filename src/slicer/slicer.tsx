
import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    products: [] as any[],
    productCount : 0
}

const productSlicer = createSlice({
    name:"product-slice",
    initialState,
    reducers : {
        addToCartProduct : (state,action)=>{
            state.products.push(action.payload)
            state.productCount = state.products.length
        },
        removeFromCart :(state,action)=>{
            state.products = state.products.filter(item=>item.id!==action.payload.id)
            state.productCount = state.products.length
        }
    }
})

export const{addToCartProduct,removeFromCart}  = productSlicer.actions
export default productSlicer.reducer

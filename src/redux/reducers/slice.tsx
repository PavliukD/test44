import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  fetchProducts } from "../operations/operations";

import { Product, Cart } from '../../components/utils/types'

type InitialStateType = {
    productsList: Product[],
    view: "list" | "table",
    cart: Cart[]
}

export const initialState: InitialStateType = {
    productsList: [],
    view: "list",
    cart: [],
}

const Slice = createSlice({
    name: "Slice",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Cart[]>) => {
            state.cart = action.payload
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const index = state.cart.findIndex(item => item.id === action.payload)
            state.cart.splice(index, 1)
        },
        changeView: (state, action: PayloadAction<"list" | "table">) => {
            state.view = action.payload
        },
        clearPage: (state) => {
            state.cart = []
        },
        changeQuantity: (state, action: PayloadAction<Cart[]>) => {
            state.cart = action.payload
        }
      },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.productsList = action.payload
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.productsList = []
            })
    }
})

export default Slice.reducer
export const {addToCart, removeFromCart, changeView, clearPage, changeQuantity } = Slice.actions
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  fetchProducts } from "../operations/operations";


type Product = {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    title: string
}

type Cart = {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    title: string,
    quantity: number
}

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
        addToCart: (state, action: PayloadAction<Cart>) => {
            state.cart.push(action.payload)
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
        changeQuantity: (state, action: PayloadAction<{ id: number, quantity: number }>) => {
            const { id, quantity } = action.payload
            let data: Cart[] = { ...state.cart }
            let q = quantity
            if (q < 1) {
                q = 1
            }
            console.log(data)
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
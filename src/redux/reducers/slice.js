import { createSlice } from "@reduxjs/toolkit";
import { addToCart, changeView, fetchProducts, removeFromCart, clearPage, changeQuantity } from "../operations/operations";

export const initialState = {
    productsList: [],
    view: "list",
    cart: []
}

const Slice = createSlice({
    name: "Slice",
    initialState,
    reducers: {
        clearPage: (state) => {
          state = initialState;
        },
      },
    extraReducers: {
        [fetchProducts.fulfilled]: (state, action) => {
            state.productsList = action.payload.data
        },
        [fetchProducts.rejected]: (state) => {
            state.productsList = []
        },
        [addToCart.fulfilled]: (state, action) => {
            state.cart.push(action.payload)
        },
        [removeFromCart.fulfilled]: (state, action) => {
            const index = state.cart.findIndex(item => item.id === action.payload.id)
            state.cart.splice(index, 1)
        },
        [changeView.fulfilled]: (state, action) => {
            state.view = action.payload.view
        },
        [clearPage.fulfilled]: (state, action) => {
            state.cart = []
        },
        [changeQuantity.fulfilled]: (state, action) => {
            const { id, quantity } = action.payload
            const index = state.cart.findIndex(item => item.id === id)
            let q = quantity
            if (q < 1) {
                q = 1
            }
            
            const newData = {
                ...action.payload,
                quantity: q
            }
            state.cart.splice(index, 1, newData)
        }
    }
})

export default Slice.reducer
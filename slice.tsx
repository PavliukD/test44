import { AsyncThunkAction, createSlice, isAsyncThunkAction, PayloadAction } from "@reduxjs/toolkit";
import { addToCart, changeView, fetchProducts, removeFromCart, clearPage, changeQuantity } from "../operations/operations";
import type { RootState } from "../store";

interface State {
    view: "list" | "table",
    productsList: [],
    cart: []
}

type ChangePayload = {
    id: number,
    quantity: number
}

type DataPayload = {
    data: []
}

type View = {
    view: "list" | "table"
}

type Remove = {
    id: number
}

type Add = {
    id: number,
    quantity: number,
    title: string,
    description: string
}

export const initialState: State = {
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
        [fetchProducts.fulfilled]: (state: State, action: PayloadAction<DataPayload>) => {
            state.productsList = action.payload.data
        },
        [fetchProducts.rejected]: (state: State) => {
            state.productsList = []
        },
        [addToCart.fulfilled]: (state: State, action: PayloadAction<Add>) => {
            state.cart.push(action.payload)
        },
        [removeFromCart.fulfilled]: (state: State, action: PayloadAction<Remove>) => {
            const index = state.cart.findIndex(item => item.id === action.payload.id)
            state.cart.splice(index, 1)
        },
        [changeView.fulfilled]: (state: State, action: PayloadAction<View>) => {
            state.view = action.payload.view
        },
        [clearPage.fulfilled]: (state: State, action: PayloadAction<any>) => {
            state.cart = []
        },
        [changeQuantity.fulfilled]: (state: State, action: PayloadAction<ChangePayload>) => {
            const { id, quantity } = action.payload
            const index = state.cart.findIndex(item => item.id === id)
            let q = quantity
            if (q < 1) {
                q = 1
            }
            
            const newData: Data = {
                ...action.payload,
                quantity: q
            }
            state.cart.splice(index, 1, newData)
        }
    }
})

export default Slice.reducer
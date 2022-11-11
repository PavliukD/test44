import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../operations/operations";

const initialState = {
    productsList: []
}

const Slice = createSlice({
    name: "Slice",
    initialState,
    reducers: {
        clearPage: (state) => {
          state.currentPage = initialState.currentPage;
        },
      },
    extraReducers: {
        [fetchProducts.fulfilled]: (state, action) => {
            state.productsList = action.payload.data
        },
        [fetchProducts.rejected]: (state) => {
            state.productsList = []
        }
    }
})


export default Slice.reducer
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async(_, { rejectWithValue }) => {
        try {
            const data = await api.get()
            return data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

export const addToCart = createAsyncThunk(
    'cart/addToCart',
    (data) => {
        console.log(data)
        return data
    }
)

export const removeFromCart = createAsyncThunk(
    'cart/removeFromCart',
    (data) => {
        return data
    }
)

export const changeView = createAsyncThunk(
    'view/changeView',
    (data) => {
        return data
    }
)

export const clearPage = createAsyncThunk(
    'cart/clearPage',
    () => {
        return 
    }
)

export const changeQuantity = createAsyncThunk(
    'cart/changeQuantity',
    (data) => {
        return data
    }
)
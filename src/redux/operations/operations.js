import { createAsyncThunk, getState } from "@reduxjs/toolkit";
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
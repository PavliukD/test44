import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

type Product = {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    title: string
}

type Data = Product[]

export const fetchProducts = createAsyncThunk<Data, undefined, {rejectValue: string}>(
    'products/fetchProducts',
    async (_, { rejectWithValue }) => {
        const { data } = await api.get()

        if (!data) {
            return rejectWithValue('Can`t get data. Server error')
        }
        return data
    }
)
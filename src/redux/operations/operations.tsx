import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

import {Product} from '../../components/utils/types'

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
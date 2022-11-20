import axios from "axios";

const URL = "https://fakestoreapi.com"

axios.defaults.baseURL = URL

type Product = {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    title: string
}

type Response = {
    data: Product[]
}

export const api: any = {
    get: async () => {
        try {
            const resp = await axios.get('/products')
            return resp as Response
        } catch (e) {
            return e
        }
    }
}
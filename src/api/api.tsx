import axios from "axios";

const URL = "https://fakestoreapi.com"

axios.defaults.baseURL = URL

export const api = {
    get: async () => {
        try {
            const resp = await axios.get('/products')
            return resp
        } catch (e) {
            return e
        }
    }
}
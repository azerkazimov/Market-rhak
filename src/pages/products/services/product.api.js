import { api } from "../../../config/instanse"

export const getProducts = async () => {
    const response = await api.get('/products') // == https://fakestoreapi.com//products
    return response.data
}
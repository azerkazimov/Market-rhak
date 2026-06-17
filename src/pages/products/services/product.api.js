import { api } from "../../../config/instanse"

export const getProducts = async () => {
    const response = await api.get('/products') // == https://fakestoreapi.com//products
    return response.data
}

export const getProductById = async (id) => {
    const response = await api.get(`/products/${id}`) // == https://fakestoreapi.com//products/1
    return response.data
}
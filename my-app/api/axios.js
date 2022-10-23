import axios from "axios";

const instance = axios.create({
    baseURL: 'https://6348acb7a59874146b0eed0f.mockapi.io'
})

export const getProducts = () => {
    return instance.get('/products')
}

export const getProduct = (id) => {
    return instance.get(`/products/${id}`)
}

export const create = (data) => {
    return instance.post('/products', data)
}

export const remove = (id) => {
    return instance.delete(`/products/${id}`)
}

export const update = (id, content) => {
    return instance.put(`/products/${id}`, content)
}
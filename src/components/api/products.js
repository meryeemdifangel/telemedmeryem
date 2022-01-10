import api from './client';

const endpoint = '/products';

const getProducts = () => api.get(endpoint);

const addProduct = (product) => {
    const formData = new FormData();
    const body = { ...product };
    for ( let key in body ) {
        formData.append(key, body[key]);
    }
    formData.append('imageSrc', imageSrc);
    return api.post(endpoint,formData);
}
export default {
    getProducts,
    addProduct,
}
import api from './client';

const endpoint = '/tickets';

const getTickets = () => api.get(endpoint);

const addTicket = (ticket) => {
    const formData = new FormData();
    const body = { ...ticket };
    for ( let key in body ) {
        formData.append(key, body[key]);
    }
    formData.append('imageSrc', imageSrc);
    return api.post(endpoint,formData);
}
export default {
    getTickets,
    addTicket,
}
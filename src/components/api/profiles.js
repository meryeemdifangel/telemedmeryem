import api from './client';
const endpoint = 'profiles';
const getProfiles = () => api.get(endpoint);
export default {
    getProfiles,
}
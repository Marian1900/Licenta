import axios from 'axios'

const AxiosAPI = axios.create();

AxiosAPI.interceptors.response.use(response => {
    return response.data;
}, (error) => error)

export default AxiosAPI;
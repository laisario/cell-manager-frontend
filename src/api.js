import _axios from 'axios';

const createAxiosInstance = ({ file = false } = {}) => {
    const instance = _axios.create({
        withCredentials: true,
        baseURL: 'http://localhost:3014/',
    });


    const contentType = file ? 'multipart/form-data' : 'application/json'

    instance.defaults.headers.post['Content-Type'] = contentType
    instance.defaults.headers.patch['Content-Type'] = contentType
    instance.defaults.headers.put['Content-Type'] = contentType

    instance.interceptors.request.use((request) => {
        const token = window.localStorage.getItem('token')
        request.headers.Authorization = token;
        return request
    })

    instance.interceptors.response.use((response) => response, (error) => Promise.reject(error))

    return instance
}

export default createAxiosInstance()
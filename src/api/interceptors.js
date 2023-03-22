import axios from "axios";

export const baseURL = import.meta.env.VITE_BASE_API

axios.defaults.baseURL = baseURL
axios.defaults.timeout = import.meta.env.VITE_TIMEOUT

// 请求拦截器
axios.interceptors.request.use(
    (config) => {
        console.log(config);
        return config
    },
    (error) => Promise.reject(error)
);

// 响应拦截器
axios.interceptors.response.use(
    (response) => {
        const { code, data, message } = response.data
        switch (code) {
            case 200:
                return data
            default:
                return Promise.reject(message)
        }
    },
    (error) => {
        return Promise.reject(error)
    }
);

export default axios
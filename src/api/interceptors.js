import axios from "axios";
import { messageBox } from '../utils/message'

export const baseURL = import.meta.env.VITE_BASE_API

axios.defaults.baseURL = baseURL
axios.defaults.timeout = import.meta.env.VITE_TIMEOUT

// 请求拦截器
axios.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        messageBox({ message: '请求出错', type: 'error' })
        Promise.reject(error)
    }
);

// 响应拦截器
axios.interceptors.response.use(
    (response) => {
        const { code, data, message } = response.data
        switch (code) {
            case 20000:
                return data
            default:
                messageBox({ message, type: 'error' })
                return Promise.reject(message)
        }
    },
    (error) => {
        messageBox({ message: '请求出错', type: 'error' })
        return Promise.reject(error)
    }
);

export default axios
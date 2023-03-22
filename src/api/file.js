import axios from './interceptors'

export function get8DaysFileCount() {
    return axios.get('/file/8DaysCount')
}
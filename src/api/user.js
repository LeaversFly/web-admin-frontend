import axios from './interceptors'

export function getUserData() {
    return axios.get('/user/all')
}
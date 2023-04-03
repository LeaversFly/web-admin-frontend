import axios from './interceptors'

export function getUserData() {
    return axios.get('/user/all')
}

export function updateRemainById(data) {
    return axios.put('/user/edit', data)
}
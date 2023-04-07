import axios from './interceptors'

export function getUserData(data) {
    return axios.get(`/user/all?pageNum=${data.pageNum}&pageSize=${data.pageSize}`)
}

export function getUserSum() {
    return axios.get('/user/sum')
}

export function updateRemainById(data) {
    return axios.put('/user/edit', data)
}
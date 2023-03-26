import axios from './interceptors'

export function get8DaysFileCount() {
    return axios.get('/file/8DaysCount')
}

export function getFileData() {
    return axios.get('/file/all')
}
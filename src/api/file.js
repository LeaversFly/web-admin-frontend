import axios from './interceptors'

export function get8DaysFileCount() {
    return axios.get('/file/8DaysCount')
}

export function getFileData(data) {
    return axios.get(`/file/all?pageNum=${data.pageNum}&pageSize=${data.pageSize}`)
}
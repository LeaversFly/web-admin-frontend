import axios from './interceptors'

export function get8DaysFileCount() {
    return axios.get('/file/8DaysCount')
}

export function getFileList(data) {
    return axios.get(`/file/all?pageNum=${data.pageNum}&pageSize=${data.pageSize}`)
}

export function getFileSum() {
    return axios.get('/file/sum')
}

export function deleteAllFiles() {
    return axios.delete('/file/clear')
}
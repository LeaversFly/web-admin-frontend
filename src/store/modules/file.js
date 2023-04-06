import { defineStore } from "pinia"
import { getFileList, getFileSum } from '../../api/file'

export default defineStore('file', {
    state() {
        return {
            fileData: [],
            fileSum: 0
        }
    },
    actions: {
        async setFileData(data) {
            this.fileData = await getFileList(data)
        },
        async setFileSum() {
            this.fileSum = await getFileSum()
        }
    },
    getters: {

    }
})
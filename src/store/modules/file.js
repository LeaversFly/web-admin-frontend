import { defineStore } from "pinia"
import { deleteAllFiles, getFileList, getFileSum } from '../../api/file'

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
        },
        async deleteAllFile() {
            let res = await deleteAllFiles().catch(err => {
                return new Promise.reject(err)
            })
            return res
        }
    },
    getters: {

    }
})
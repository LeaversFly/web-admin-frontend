import { defineStore } from "pinia"
import { getFileData } from '../../api/file'

export default defineStore('file', {
    state() {
        return {
            fileData: []
        }
    },
    actions: {
        async setFileData(data) {
            this.fileData = await getFileData(data)
        }
    },
    getters: {

    }
})
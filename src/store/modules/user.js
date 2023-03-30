import { defineStore } from "pinia"
import { getUserData } from '../../api/user'

export default defineStore('user', {
    state() {
        return {
            userData: []
        }
    },
    actions: {
        async setUserData() {
            this.userData = await getUserData()
        }
    },
    getters: {

    }
})
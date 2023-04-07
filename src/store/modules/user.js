import { defineStore } from "pinia"
import { getUserData, getUserSum } from '../../api/user'

export default defineStore('user', {
    state() {
        return {
            userData: [],
            userSum: 0
        }
    },
    actions: {
        async setUserData(data) {
            this.userData = await getUserData(data)
        },
        async setUserSum() {
            this.userSum = await getUserSum()
        }
    },
    getters: {

    }
})
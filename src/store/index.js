import useUserStore from './modules/user'

export default function useStore() {
    return {
        userStore: useUserStore()
    }
}
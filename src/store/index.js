import useUserStore from './modules/user'
import useFileStore from './modules/file'

export default function useStore() {
    return {
        userStore: useUserStore(),
        fileStore: useFileStore()
    }
}
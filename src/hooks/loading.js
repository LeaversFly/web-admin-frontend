export default function useLoading({ target = document.body, fullscreen = false } = {}) {
    const loadingInstance = ref(null)

    const loading = (callback) => {
        loadingInstance.value = ElLoading.service({
            target,
            fullscreen
        })
        callback()
        loadingInstance.value.close()
    }

    return { loading }
}
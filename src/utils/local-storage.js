// 简化localStorage操作
export const ls = {
    getItem: (key) => {
        return localStorage.getItem(key)
    },
    setItem: (key, value) => {
        localStorage.setItem(key, value)
    }
}
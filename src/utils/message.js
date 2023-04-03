export function messageBox({ message, type, duration = 2000, showClose = true, grouping = true }) {
    ElMessage({ message, type, duration, showClose, grouping })
}
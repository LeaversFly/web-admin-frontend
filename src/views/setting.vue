<template>
    <div class="container">
        <el-form label-width="140px">
            <el-form-item label="手动清理">
                <el-button type="danger" round :icon="deleteIcon" @click="clear"></el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup>
import useStore from '../store'
import { messageBox } from '../utils'

const { fileStore } = useStore()

const deleteIcon = 'Delete'

const clear = () => {
    let res = fileStore.deleteAllFile()
    if (res) {
        messageBox({ message: '删除成功', type: 'success' })
    }
}
</script>

<style lang="scss" scoped>
.container {
    margin: 20px;
    padding: 16px;

    border: 0.5px solid #e0e0e0;
    box-shadow: 0 2px 10px 0 rgba(0 0 0 / 5%);
    border-radius: 12px;

    .el-form {
        .el-form-item {
            margin: 20px 0;
        }
    }
}
</style>
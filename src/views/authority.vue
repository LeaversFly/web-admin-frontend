<template>
    <div class="container">
        <el-table :data="filterData" style="width: 100%">
            <el-table-column label="用户id" prop="id" />
            <el-table-column label="剩余次数" prop="remain" />
            <el-table-column label="主题" prop="theme" />
            <el-table-column label="ip地址" prop="ip_addr" />
            <el-table-column align="right">
                <template #header>
                    <el-input v-model="search" size="small" placeholder="点击搜索..." />
                </template>
                <template #default="scope">
                    <el-button size="small" type="danger" @click="handleForbiden(scope.$index, scope.row)">禁用</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useStore from '../store'

const { userStore } = useStore()

const { userData } = storeToRefs(userStore)
const search = ref('')
const filterData = computed(() =>
    userData.value.filter(
        (item) =>
            !search.value ||
            item.id.toString().includes(search.value) ||
            item.ip_addr.includes(search.value)
    )
)

userStore.setUserData()

// 点击禁用
const handleForbiden = (index, row) => {
    console.log(index, row)
}
</script>

<style lang="scss" scoped>
.container {
    margin: 20px;
    padding: 8px;

    border: 0.5px solid #e0e0e0;
    box-shadow: 0 2px 10px 0 rgba(0 0 0 / 5%);
    border-radius: 12px;
}
</style>
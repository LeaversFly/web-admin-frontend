<template>
    <el-table :data="filterTableData" style="width: 100%">
        <el-table-column label="用户id" prop="user_id" />
        <el-table-column label="剩余次数" prop="remain" />
        <el-table-column label="主题" prop="theme" />
        <el-table-column align="right">
            <template #header>
                <el-input v-model="search" size="small" placeholder="点击搜索..." />
            </template>
            <template #default="scope">
                <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">禁用</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script setup>
import useStore from '../store'

const { userStore } = useStore()

const search = ref('')

// const filterTableData = computed(() =>
//     tableData.filter(
//         (data) =>
//             !search.value ||
//             data.name.toLowerCase().includes(search.value.toLowerCase())
//     )
// )

const handleDelete = (index, row) => {
    console.log(index, row)
}
</script>

<style></style>
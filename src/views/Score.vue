<template>
    <div class="row">
        <div style="display: flex;justify-content: space-between;margin: 8px;">
            <el-input v-model="input3" placeholder="搜索参赛成员..." class="input-with-select">
                <template #append>
                    <el-button :icon="Search" />
                </template>
            </el-input>
            <el-button type="primary" round>发布当前比赛成绩</el-button>
        </div>
        <el-tabs tab-position="left" style="height: 200px" class="demo-tabs">
            <el-tab-pane label="蓝桥杯">
                <el-table :data="tableData">
                    <el-table-column prop="date" label="日期" width="140" />
                    <el-table-column prop="name" label="姓名" width="120" />
                    <el-table-column prop="score" label="分数" />
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="三创赛">Config</el-tab-pane>
            <el-tab-pane label="挑战杯">Role</el-tab-pane>
            <el-tab-pane label="互联网+">Task</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
const item = {
    date: '2022-10-10',
    name: '王小虎',
    score: '100',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))
</script>

<style scoped>
.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
    height: 100%;
}

.row {
    padding: 16px;
    margin: 16px;
    background-color: white;
}

.input-with-select {
    width: 30%;
}
</style>
<template>
    <div class="container">
        <el-table :data="filterData" style="width: 100%">
            <el-table-column label="文件id" prop="id" />
            <el-table-column label="所属用户id" prop="user_id" />
            <el-table-column label="文件夹名" prop="folder" />
            <el-table-column label="上传时间" prop="send_time" />
            <el-table-column label="取件码" prop="code" />
            <el-table-column label="剩余次数" prop="remain" />
            <el-table-column label="有效性" prop="validity">
                <!-- <template #default="scoped">
                    <span v-if="!isShowInput(scoped.row.id)">
                        {{ scoped.row.remain }}
                    </span>
                </template> -->
            </el-table-column>
            <el-table-column align="right">
                <template #header>
                    <el-input v-model="search" size="small" placeholder="点击搜索...(取件码)" />
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="100" class="pagination" />
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useStore from '../store';

const { fileStore } = useStore()
fileStore.setFileData({ pageNum: 1, pageSize: 10 })

const { fileData } = storeToRefs(fileStore)
const search = ref('')
const filterData = computed(() =>
    fileData.value.filter(
        (item) =>
            !search.value ||
            item.code.toString().includes(search.value)
    )
)
</script>

<style lang="scss" scoped>
.container {
    margin: 20px;
    padding: 0 8px 8px 8px;

    border: 0.5px solid #e0e0e0;
    box-shadow: 0 2px 10px 0 rgba(0 0 0 / 5%);
    border-radius: 12px;
}
</style>
<template>
    <div class="container">
        <el-table :data="filterData" style="width: 100%" @cell-mouse-enter="handleMouseEnter"
            @cell-mouse-leave="handleMouseLeave">
            <el-table-column label="用户id" prop="id" />
            <el-table-column label="剩余次数">
                <template #default="scoped">
                    {{ scoped.row.remain }}
                    <el-icon :class="isShowEdit(scoped.row.id)">
                        <Edit />
                    </el-icon>
                </template>
            </el-table-column>
            <el-table-column label="主题" prop="theme" />
            <el-table-column label="ip地址" prop="ip_addr" />
            <el-table-column align="right">
                <template #header>
                    <el-input v-model="search" size="small" placeholder="点击搜索..." />
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup>
import { Edit } from '@element-plus/icons-vue'
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
const hoverIndex = ref(-1)
const isShowEdit = computed(() =>
    (id) =>
        hoverIndex.value === id ? 'edit-show' : 'edit-hidden'
)

userStore.setUserData()

const handleMouseEnter = (e) => {
    hoverIndex.value = e.id
}

const handleMouseLeave = () => {
    hoverIndex.value = -1
}
</script>

<style lang="scss" scoped>
.container {
    margin: 20px;
    padding: 0 8px 8px 8px;

    border: 0.5px solid #e0e0e0;
    box-shadow: 0 2px 10px 0 rgba(0 0 0 / 5%);
    border-radius: 12px;

    .edit-show {
        display: inline-block;
        margin-left: 40px;

        font-size: medium;
        color: #409eff;
        cursor: pointer;
    }

    .edit-hidden {
        display: none;
    }
}
</style>
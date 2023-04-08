<template>
    <div class="container">
        <el-table :data="filterData" style="width: 100%" @cell-mouse-enter="handleMouseEnter"
            @cell-mouse-leave="handleMouseLeave">
            <el-table-column label="用户id" prop="id" />
            <el-table-column label="剩余次数">
                <template #default="scoped">
                    <span v-if="!isShowInput(scoped.row.id)">
                        {{ scoped.row.remain }}
                    </span>
                    <el-input-number size="small" v-model="scoped.row.remain" :min="0" :max="5" v-else />
                    <el-icon v-if="!isShowInput(scoped.row.id)" :class="isShowEdit(scoped.row.id)"
                        @click="showInput(scoped.row.id)">
                        <Edit />
                    </el-icon>
                    <span class="btns" v-else>
                        <el-button type="primary" size="small"
                            @click="submit(scoped.row.id, scoped.row.remain)">确定</el-button>
                    </span>
                </template>
            </el-table-column>
            <el-table-column label="主题" prop="theme" />
            <el-table-column label="ip地址" prop="ip_addr" />
            <el-table-column align="right">
                <template #header>
                    <el-input v-model="search" size="small" placeholder="根据 ip / id 检索..." />
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="userSum" class="pagination"
            @current-change="switchPage" hide-on-single-page />
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useStore from '../store'
import { updateRemainById } from '../api/user'
import { messageBox } from '../utils/message';
import useLoading from '../hooks/loading'


const { userStore } = useStore()
userStore.setUserData({ pageNum: 1, pageSize: 10 })
userStore.setUserSum()

const { loading } = useLoading({ target: '.container' })

// 根据关键词过滤
const { userData, userSum } = storeToRefs(userStore)
const search = ref('')
const filterData = computed(() =>
    userData.value.filter(
        (item) =>
            !search.value ||
            item.id.toString().includes(search.value) ||
            item.ip_addr.includes(search.value)
    )
)

// 悬停鼠标显示编辑按钮
const hoverIndex = ref(-1)
const isShowEdit = computed(() =>
    (id) =>
        hoverIndex.value === id ? 'edit-show' : 'edit-hidden'
)

// 点击编辑出现输入框
const isEdit = ref(false)
const id = ref(0)
const isShowInput = computed(() =>
    (index) => isEdit.value && id.value === index
)

const handleMouseEnter = (e) => {
    hoverIndex.value = e.id
}

const handleMouseLeave = () => {
    hoverIndex.value = -1
}

const showInput = (index) => {
    id.value = index;
    isEdit.value = true
}

const submit = async (id, remain) => {
    isEdit.value = false
    let res = await updateRemainById({ id, remain })
    if (res) {
        messageBox({ message: '修改成功', type: 'success' })
    }
}

const switchPage = (pageNum) => {
    loading(() => {
        userStore.setUserData({ pageNum, pageSize: 10 })
    })
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
        margin-left: 30px;

        font-size: medium;
        color: #409eff;
        cursor: pointer;
    }

    .edit-hidden {
        display: none;
    }

    .btns {
        margin-left: 15px;
    }
}
</style>
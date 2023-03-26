<template>
    <el-menu default-active="/" class="el-menu-vertical-demo" router>
        <el-menu-item index="/">
            <el-icon>
                <Odometer />
            </el-icon>
            <span v-if="isExpand">首页</span>
        </el-menu-item>
        <el-menu-item index="/setting">
            <el-icon>
                <Setting />
            </el-icon>
            <span v-if="isExpand">权限设置</span>
        </el-menu-item>
    </el-menu>
</template>

<script setup>
import { Odometer, Setting } from '@element-plus/icons-vue'

const props = defineProps(['isExpand'])
</script>

<style lang="scss" scoped>
.el-menu {
    border-right: none;

    .el-menu-item {
        background-color: #f8f8f8;
    }

    .el-menu-item:hover {
        background-color: #ebebeb;
    }
}
</style>


<template>
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" router>
        <el-menu-item index="/">
            <el-icon>
                <Odometer />
            </el-icon>
            <span v-if="isExpand">首页</span>
        </el-menu-item>
        <el-menu-item index="/authority">
            <el-icon>
                <Avatar />
            </el-icon>
            <span v-if="isExpand">权限管理</span>
        </el-menu-item>
    </el-menu>
</template>

<script setup>
import { Odometer, Avatar } from '@element-plus/icons-vue'

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


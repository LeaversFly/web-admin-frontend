<template>
    <el-menu default-active="/" class="el-menu-vertical-demo" router>
        <el-menu-item index="/">
            <el-icon>
                <House />
            </el-icon>
            <span>首页</span>
        </el-menu-item>
        <el-menu-item index="/setting">
            <el-icon>
                <Setting />
            </el-icon>
            <span>权限设置</span>
        </el-menu-item>
        <el-menu-item index="/works">
            <el-icon>
                <Tickets />
            </el-icon>
            <span>作品总览</span>
        </el-menu-item>
        <el-menu-item index="/competition">
            <el-icon>
                <DocumentCopy />
            </el-icon>
            <span>竞赛管理</span>
        </el-menu-item>
        <el-menu-item index="/score">
            <el-icon>
                <Medal />
            </el-icon>
            <span>成绩管理</span>
        </el-menu-item>
        <el-menu-item index="/notify">
            <el-icon>
                <Bell />
            </el-icon>
            <span>通知</span>
        </el-menu-item>
    </el-menu>
</template>

<script setup>
import { House, Setting, Tickets, DocumentCopy, Medal, Bell } from '@element-plus/icons-vue'

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


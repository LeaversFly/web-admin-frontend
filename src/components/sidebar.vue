<template>
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" router>
        <el-menu-item v-for="item in routes" :key="item.path" :index="item.path">
            <el-icon>
                <component :is="item.meta.icon" />
            </el-icon>
            <span v-if="isExpand">{{ item.meta.title }}</span>
        </el-menu-item>
    </el-menu>
</template>

<script setup>
import routes from '../router/routes';

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


<template>
  <div class="common-layout">
    <el-container>
      <!-- 头部 -->
      <el-header style="border-bottom: 1px solid #e0e0e0; height: 7vh;" v-if="!$route.meta.show">
        <NavBar />
      </el-header>
      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="200px" style="border-right: 1px solid #e0e0e0;" v-if="!$route.meta.show">
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
        </el-aside>
        <!-- 内容 -->
        <el-main style="background-color: #f6f7f9;padding: 0;">
          <el-scrollbar :height="$route.meta.show ? '100vh' : '93vh'">
            <router-view></router-view>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { House, Setting, Tickets, DocumentCopy, Medal, Bell } from '@element-plus/icons-vue'
</script>

<style scoped>
.el-menu {
  border-right: none;
}
</style>

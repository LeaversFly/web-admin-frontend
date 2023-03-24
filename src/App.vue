<template>
  <div class="layout">
    <div class="sider" :style="{ 'width': isExpand ? '220px' : '80px', transition: 'all 0.28s' }">
      <div class="sider-top">
        <h3 v-if="isExpand" style="white-space: nowrap;">后台管理系统</h3>
        <el-icon v-else>
          <Promotion />
        </el-icon>
      </div>
      <div class="sider-body">
        <el-scrollbar>
          <sidebar />
        </el-scrollbar>
      </div>
    </div>
    <div class="main">
      <div class="main-header">
        <div class="main-header-top">
          <el-button type="primary" @click="isExpand = !isExpand" :icon="isExpand ? Expand : Fold" color="white"
            style="font-size:1.3em" text />
        </div>
        <div class="main-header-tags-wrapper">
          <el-scrollbar>
            <div class="main-header-tags">
              <div class="tag-item">面包屑</div>
            </div>
          </el-scrollbar>
        </div>
      </div>
      <div class="main-body">
        <div class="main-content-wrapper">
          <div class="content">
            <el-scrollbar>
              <router-view></router-view>
            </el-scrollbar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Promotion, Expand, Fold } from '@element-plus/icons-vue'

const isExpand = ref(true)
</script>

<style lang="scss">
.layout {
  display: flex;
}

* {
  box-sizing: border-box;
}

.sider {
  width: 220px;
  height: 100vh;
  background-color: #ddd;
  position: relative;

  flex-shrink: 0;

  .sider-top {
    height: 50px;
    background-color: #bfa;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;
  }

  .sider-body {
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: pink;

    .li-item {
      height: 50px;
      margin: 10px;
      background-color: grey;
      color: #fff;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

}

.main {
  flex: 1;
  overflow: hidden;

  position: relative;

  .main-header {
    .main-header-top {
      height: 50px;
      background: skyblue;

      display: flex;
      align-items: center;
      padding: 0 10px;
    }

    .main-header-tags-wrapper {

      background-color: lightsalmon;
      padding: 0 10px;


      .main-header-tags {
        height: 36px;

        display: flex;
        align-items: center;

        .tag-item {
          width: 160px;
          height: 26px;
          margin-right: 10px;

          background-color: #fff;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }

  .main-body {
    position: absolute;
    top: 86px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(211, 228, 243);

    .main-content-wrapper {
      overflow: auto;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 20px;
      background-clip: content-box;

      .content {
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: #fff;
        border-radius: 8px;

        padding: 10px 0 10px 10px;
        box-sizing: border-box;
      }
    }
  }
}
</style>


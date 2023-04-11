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
          <sidebar :isExpand="isExpand" />
        </el-scrollbar>
      </div>
    </div>
    <div class="main">
      <div class="main-header">
        <div class="main-header-top">
          <el-button type="primary" @click="isExpand = !isExpand" :icon="isExpand ? foldIcon : expandIcon" color="white"
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
const expandIcon = 'Expand'
const foldIcon = 'Fold'
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
  width: 120px;
  height: 100vh;
  position: relative;

  border-right: 2px solid #f3f3f3;
  background-color: #f8f8f8;

  flex-shrink: 0;

  .sider-top {
    height: 50px;

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

    .li-item {
      height: 50px;
      margin: 10px;
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
      display: flex;
      align-items: center;
      padding: 0 10px;
    }

    .main-header-tags-wrapper {
      padding: 0 10px;
      background-color: #ecf5ff;

      .main-header-tags {
        height: 36px;

        display: flex;
        align-items: center;

        .tag-item {
          width: 160px;
          height: 26px;
          margin-right: 10px;

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

    .main-content-wrapper {
      overflow: auto;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      background-clip: content-box;

      .content {
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: #fff;
        border-radius: 8px;

        padding: 0 0 0 10px;
        box-sizing: border-box;
      }
    }
  }
}
</style>


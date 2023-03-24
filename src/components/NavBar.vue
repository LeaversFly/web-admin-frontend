<template>
        <div class="header">
            <div class="logo-title">
                <img src="/logo.png">
                <span>竞赛后台管理系统</span>
            </div>
            <div @click="goLogin">登录</div>
        </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const goLogin = () => {
    router.push('/login')
}
</script>

<style scoped>
.logo-title {
    display: flex;
    align-items: center;
}

.logo-title span {
    margin: 0 16px;
    font-size: 18px;
    font-weight: 700;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 100%;
    margin: 0 auto;
}
</style>
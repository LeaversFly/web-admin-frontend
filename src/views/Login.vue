<template>
    <div class="login">
        <div class="container">
            <div class="login-form" v-if=isLogin>
                <span class="login-title">欢迎</span>
                <el-form ref="loginForm" :model="ruleForm" status-icon :rules="rules" class="demo-ruleForm">
                    <el-form-item prop="username">
                        <el-input placeholder="账号" v-model="ruleForm.username" />
                    </el-form-item>
                    <el-form-item prop="pass">
                        <el-input v-model="ruleForm.pass" placeholder="输入密码" type="password" show-password />
                    </el-form-item>
                    <el-form-item prop="role">
                        <el-select placeholder="角色" v-model="ruleForm.role">
                            <el-option label="用户" value="1" />
                            <el-option label="管理员" value="2" />
                            <el-option label="超级管理员" value="3" />
                        </el-select>
                    </el-form-item>
                    <div class="login-btn">
                        <div class="btn">
                            登录
                        </div>
                        <span class="forget">
                            忘记密码
                        </span>
                    </div>
                </el-form>
                <div>
                    <span>还没账号?</span>
                    <span @click="changeIsLogin">注册</span>
                </div>
            </div>
            <div class="register-form" v-else=isLogin>
                <span class="login-title">注册账号</span>
                <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" class="demo-ruleForm">
                    <el-form-item prop="username">
                        <el-input placeholder="账号" v-model="ruleForm.username" />
                    </el-form-item>
                    <el-form-item prop="nickname">
                        <el-input placeholder="昵称" v-model="ruleForm.nickname" />
                    </el-form-item>
                    <el-form-item prop="email">
                        <el-input placeholder="电子邮箱" v-model="ruleForm.email" />
                    </el-form-item>
                    <el-form-item prop="sex">
                        <el-select placeholder="性别" v-model="ruleForm.sex">
                            <el-option label="男" value="1" />
                            <el-option label="女" value="0" />
                            <el-option label="保密" value="-1" />
                        </el-select>
                    </el-form-item>
                    <el-form-item prop="inputCode">
                        <el-input placeholder="验证码" style="width:50%" v-model="ruleForm.inputCode" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <el-button type="primary" style="font-size:24px" @click="changeCode" link>{{ code }}</el-button>
                    </el-form-item>
                    <el-form-item prop="pass">
                        <el-input v-model="ruleForm.pass" placeholder="输入密码" type="password" show-password
                            autocomplete="off" />
                    </el-form-item>
                    <el-form-item prop="checkPass">
                        <el-input v-model="ruleForm.checkPass" placeholder="再次输入密码" type="password" show-password
                            autocomplete="off" />
                    </el-form-item>
                    <div class="btn" @click="changeIsLogin">
                        创建
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { reactive, ref } from 'vue'

const router = useRouter();
//是否是登录状态（用于区分什么时候展示登入、注册页面）
const isLogin = ref(true);
// 验证码
const code = ref('');
//校验规则
const ruleFormRef = ref();
// 登录表单
const loginForm = ref();
// 注册表单
const ruleForm = reactive({
    username: '',
    nickname: '',
    email: '',
    sex: '',
    pass: '',
    checkPass: '',
    inputCode: '',
    role: '',
})

//修改页面状态
const changeIsLogin = () => { isLogin.value = !isLogin.value }

onMounted(() => {
    changeCode();
})

// 点击改变验证码
const changeCode = () => {
    let numSet = "0123456789qwertyuiopasadfghjkmnbvcxzQWERTYUIOPLKJHGFDSAZXCVBNM";
    let str = '';
    for (var i = 0; i < 4; i++) {
        str += numSet.charAt(Math.floor(Math.random() * 62))
    }
    code.value = str;
};





// 密码校验规则
const validatePass = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入密码!'))
    } else {
        if (ruleForm.checkPass !== '') {
            if (!ruleFormRef.value) return
            ruleFormRef.value.validateField('checkPass', () => null)
        }
        callback()
    }
}

// 二次密码校验规则
const validatePass2 = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请再次输入密码!'))
    } else if (value !== ruleForm.pass) {
        callback(new Error("两次密码不相同!"))
    } else {
        callback()
    }
}

// 验证码校验
const checkCode = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入验证码!'))
    } else if (value !== code.value) {
        if (value !== code.value.toLowerCase()) {
            callback(new Error("验证码错误!"))
        }
        callback()
    } else {
        callback()
    }
}


// 规则列表
const rules = reactive({
    username: [
        { required: true, message: '请输入用户id!', trigger: 'change' },
        { min: 2, max: 12, message: '用户id长度为2-12位!', trigger: 'change' },
    ],
    nickname: [
        { required: true, message: '请输入昵称!', trigger: 'change' },
    ],
    email: [
        { required: true, message: '请输入电子邮箱!', trigger: 'blur' },
        { type: 'email', message: '请输入正确的电子邮箱地址', trigger: ['blur', 'change'], },
    ],
    sex: [
        { required: true, message: '请选择性别!', trigger: 'change' },
    ],
    sex: [
        { required: true, message: '请选择角色!', trigger: 'change' },
    ],
    inputCode: [{ validator: checkCode, trigger: 'blur' }],
    pass: [{ validator: validatePass, trigger: 'change' }],
    checkPass: [{ validator: validatePass2, trigger: 'change' }],
})
</script>

<style scoped>
.el-input {
    height: 40px;
    width: 260px;
    --el-input-focus-border-color: #c0c4cc;
    --el-input-focus-bg-color: #eaeaea;
}

.el-select {
    height: 40px;
    width: 230px;
    --el-select-input-focus-border-color: #c0c4cc;

}

.login {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: #f2f2f2;
}

.container {
    width: 260px;
    background: #fff;
    border-radius: 10px;
    margin: 0 auto;
    overflow: hidden;
    padding: 77px 55px 33px 55px;
    box-shadow: 0 5px 10px 0px rgb(0 0 0 / 10%);
    /* 去除多次点击后的蓝色底色 */
    user-select: none;
}

.login-title {
    display: block;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 32px;
    color: #333333;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 20px;
}


.login-btn {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
}


.btn {
    cursor: pointer;
    font-family: Poppins-Medium;
    background-color: #23394A;
    color: #fff;
    font-size: 15px;
    line-height: 2.3;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    width: 30%;
}
</style>
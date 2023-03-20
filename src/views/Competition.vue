<template>
    <div class="row">
        <el-form :model="form" label-width="120px">
            <el-form-item label="竞赛名称">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="竞赛时间">
                <el-col :span="11">
                    <el-date-picker v-model="form.date1" type="date" placeholder="日期" style="width: 100%" />
                </el-col>
                <el-col :span="2" class="text-center">
                    <span class="text-gray-500">-</span>
                </el-col>
                <el-col :span="11">
                    <el-time-picker v-model="form.date2" placeholder="时间" style="width: 100%" />
                </el-col>
            </el-form-item>
            <el-form-item label="竞赛简介">
                <el-input v-model="form.desc" type="textarea" />
            </el-form-item>
            <el-form-item label="竞赛相关文件">
                <el-upload class="upload-demo" drag
                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple>
                    <el-icon class="el-icon--upload">
                        <upload-filled />
                    </el-icon>
                    <div class="el-upload__text">
                        拖动文件到此处或 <em>点击上传</em>
                    </div>
                    <template #tip>
                        <div class="el-upload__tip">
                            文件应当小于500KB
                        </div>
                    </template>
                </el-upload>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">创建比赛</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup>
import { UploadFilled } from '@element-plus/icons-vue'
import { reactive } from 'vue'

const form = reactive({
    name: '',
    date1: '',
    date2: '',
    desc: '',
})

const onSubmit = () => {
    console.log('submit!')
}
</script>

<style scoped>
.row {
    display: flex;
    justify-content: center;
    margin: 16px;
    padding: 16px;
    background-color: white;
}
</style>
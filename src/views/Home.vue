<template>
    <div class="row">
        <span class="row-item">
            <h3>用户信息
                <el-divider direction="vertical" />总人数:{{ userData.length }}
            </h3>
            <el-table :data="userData" height="400" style="width: 100%;">
                <el-table-column prop="id" label="用户id" width="180" />
                <el-table-column prop="theme" label="主题" />
                <el-table-column prop="remain" label="剩余次数" />
                <el-table-column prop="ip_addr" label="ip地址" />
            </el-table>
        </span>
        <span class="row-item">
            <h3>文件信息
                <el-divider direction="vertical" />文件数:{{ fileData.length }}
            </h3>
            <el-table lazy :data="fileData" height="400" style="width: 100%;">
                <el-table-column prop="id" label="文件id" width="180" />
                <el-table-column prop="user_id" label="所属用户id" />
                <el-table-column prop="folder" label="文件夹名" />
                <el-table-column prop="send_time" label="上传时间" />
                <el-table-column prop="code" label="取件码" />
                <el-table-column prop="remain" label="剩余次数" />
                <el-table-column prop="validity" label="有效性" />
            </el-table>
        </span>
    </div>
    <div class="row">
        <span id="score"></span>
    </div>
</template>

<script setup>
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { getFileData, get8DaysFileCount } from '../api/file';
import useStore from '../store'
import { storeToRefs } from 'pinia';

// 注册必须的组件
echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    BarChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer
]);

const { userStore } = useStore()

const { userData } = storeToRefs(userStore)
const fileData = ref([])
let xData = ref([])
let yData = ref([])

// 获取近七日上传文件数
const getScore = async (myChart) => {
    let data = await get8DaysFileCount()
    for (let i of data) {
        xData.value.push(i['x'])
        yData.value.push(i['y'])
    }
    myChart.setOption({
        title: {
            text: '近期上传文件数'
        },
        tooltip: {},
        xAxis: {
            data: xData.value
        },
        yAxis: {
            minInterval: 10,
            axisLabel: {
                formatter: '{value}'
            }
        },
        series: [
            {
                name: '数量',
                type: 'bar',
                data: yData.value
            }
        ]
    });
}

userStore.setUserData()

onMounted(async () => {
    // 初始化图表
    const myChart = echarts.init(document.getElementById('score'));
    getScore(myChart)

    const res = await getFileData()
    fileData.value = res
})
</script>

<style lang="scss" scoped>
h3 {
    padding: 0 16px;
}

.row {
    display: flex;
    justify-content: space-around;
    margin: 16px 0;
    width: 100%;

    .row-item {
        width: 48%;
        padding: 8px;

        background-color: #fff;
        border: 0.5px solid #e0e0e0;
        box-shadow: 0 2px 10px 0 rgba(0 0 0 / 5%);
        border-radius: 12px;
    }

    #score {
        width: 98%;
        height: 480px;
        margin: 0 auto;
        padding: 8px;

        border: 0.5px solid #e0e0e0;
        box-shadow: 0 2px 10px 0 rgba(0 0 0 / 5%);
        border-radius: 12px;
    }
}
</style>
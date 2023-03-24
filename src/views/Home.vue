<template>
    <div class="row">
        <span class="people">
            <h3>用户信息
                <el-divider direction="vertical" />已注册:{{ userData.length }}
            </h3>
            <el-table :data="userData" height="400" style="width: 100%;">
                <el-table-column prop="username" label="用户名" width="180" />
                <el-table-column prop="teamId" label="队伍id" />
                <el-table-column prop="email" label="邮箱" />
            </el-table>
        </span>
        <span class="people">
            <h3>队伍信息
                <el-divider direction="vertical" />队伍数:{{ teamData.length }}
            </h3>
            <el-table :data="teamData" height="400" style="width: 100%;">
                <el-table-column prop="teamName" label="队名" width="180" />
                <el-table-column prop="leader" label="队长" />
                <el-table-column prop="teamMember" label="队伍成员" />
                <el-table-column prop="id" label="队伍id" />
            </el-table>
        </span>
    </div>
    <div class="row">
        <span class="comment">
            <h3>评分信息
                <el-divider direction="vertical" />已评分:{{ commentData.length }}
            </h3>
            <el-table :data="commentData" height="400" style="width: 100%;">
                <el-table-column prop="username" label="用户名" />
                <el-table-column prop="commentText" label="评论" />
                <el-table-column prop="commentDate" label="评论时间" />
                <el-table-column prop="score" label="分数" />
                <el-table-column prop="articleId" label="作品id" />
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
import { get8DaysFileCount } from '../api/file';

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

let userData = ref([])
let teamData = ref([])
let commentData = ref([])
let xData = ref([])
let yData = ref([])

// 获取平均分
async function getScore(myChart) {
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

onMounted(() => {
    // 初始化图表
    const myChart = echarts.init(document.getElementById('score'));
    getScore(myChart)
})

</script>

<style scoped>
h3 {
    padding: 0 16px;
}

.row {
    display: flex;
    justify-content: space-around;
    margin: 16px 0;
}

.people {
    width: 48%;
}

.comment {
    width: 98%;
}

#score {
    width: 98%;
    height: 400px;
}

.people,
#score,
.comment {
    background-color: #fff;
    border: 1px solid #e0e0e0;
    box-shadow: 0 2px 10px 0 rgba(0 0 0 / 5%);
}
</style>
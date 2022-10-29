<template>
    <el-card>
        <!-- 饼图 -->
        <div class="card">
            <div>
                <div class="pie">
                    <h2>基础饼图</h2>
                </div>
                <!-- 饼图 -->
                <div id="pie"></div>
            </div>

            <div>
                <div class="circles">
                    <h2>圆环图</h2>
                </div>
                <!-- 饼图 -->
                <div id="circles"></div>
            </div>

            <div>
                <div class="Rose">
                    <h2>玫瑰图</h2>
                </div>
                <!-- 饼图 -->
                <div id="Rose"></div>
            </div>
        </div>

        <!-- 柱状图 -->

        <div class="card">
            <!-- 基础柱状图 -->
            <div>
                <div class="bar">
                    <h2>基础柱状图</h2>
                </div>
                <!-- 饼图 -->
                <div id="bar"></div>
            </div>

            <!-- 堆叠柱状图 -->
            <div>
                <div class="stack">
                    <h2>堆叠柱状图</h2>
                </div>
                <!-- 饼图 -->
                <div id="stack"></div>
            </div>

            <!-- 动态排序柱状图 -->
            <div>
                <div class="sort">
                    <h2>动态排序柱状图</h2>
                </div>
                <!-- 饼图 -->
                <div id="sort"></div>
            </div>

            <!-- 阶梯瀑布柱状图 -->
            <div>
                <div class="steps">
                    <h2>阶梯瀑布柱状图</h2>
                </div>
                <!-- 饼图 -->
                <div id="steps"></div>
            </div>
        </div>

    </el-card>
</template>
<script setup lang='ts'>
import * as echarts from 'echarts';
import { ref, reactive, onMounted } from 'vue'
import { 
    pieOption, 
    circlesOption, 
    RoseOption, 
    barOption, 
    stackingOption, 
    dynamicSortOption,
    update,
    stepOption
} from './options/chartOptions'
onMounted(() => {
    pieChart()
    circlesChart()
    RoseChart()
    bar()
    stack()
    sort()
    steps()
})
// 基础饼图
const pieChart = () => {
    const pie = echarts.init(document.getElementById("pie") as HTMLElement)
    pie.setOption(pieOption);
}
// 圆环图
const circlesChart = () => {
    const circles = echarts.init(document.getElementById("circles") as HTMLElement)
    circles.setOption(circlesOption);
}
// 玫瑰图
const RoseChart = () => {
    const Rose = echarts.init(document.getElementById("Rose") as HTMLElement)
    Rose.setOption(RoseOption);
}
// 基础柱状图
const bar = () => {
    const bar = echarts.init(document.getElementById("bar") as HTMLElement)
    bar.setOption(barOption);
}
// 堆叠柱状图
const stack = () => {
    const stack = echarts.init(document.getElementById("stack") as HTMLElement)
    stack.setOption(stackingOption);
}
// 动态排序柱状图
const sort = () => {
    const sort = echarts.init(document.getElementById("sort") as HTMLElement)
    setInterval(function() {
        update(dynamicSortOption, sort)
    }, 1000);
}
// 阶梯瀑布柱状图
const steps = () => {
    const steps = echarts.init(document.getElementById("steps") as HTMLElement)
    steps.setOption(stepOption);
}


</script>
<style scoped lang="less">
.card {
    width: 80vw;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

#pie,
#circles,
#Rose {
    width: 400px;
    height: 200px;
}

.pie,
.circles,
.Rose {
    width: 400px;

    h2 {
        margin: 0;
        font-size: 20px;
        text-align: center;
    }
}

#bar,#stack, #sort, #steps {
    width: 600px;
    height: 450px;
}

.bar,.stack,.sort,.steps {
    width: 600px;

    h2 {
        margin: 0;
        font-size: 20px;
        text-align: center;
    }
}
</style>
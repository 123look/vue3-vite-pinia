<template>
    <el-card class="box-card">
        <el-form :model="form">
            <el-row>
                <el-col :span="1">
                    <el-form-item>
                        <el-button class="btn" type="primary" @click="addArticle">增加</el-button>
                    </el-form-item>
                </el-col>
                <el-col :span="3">
                    <el-form-item>
                        <el-input v-model="searchId" />
                    </el-form-item>
                </el-col>
                <el-col :span="1">
                    <el-form-item>
                        <el-button type="primary" @click="searchBtn">搜索</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <el-row>
            <el-col :span="10">
                <Table ref="useCompontent" :tabDate="tabDate" :searchId="searchId"  />
            </el-col>
        </el-row>
        <Dialog :isVisible=dialogVisible :title=title @on-cancel="cancel" @on-confirm="Confirm" />
    </el-card>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import Table from './compontent/Table.vue'
import Dialog from './compontent/Dialog.vue'
import { userInfoStore } from '@/store/index'
import { insertArticle, searchArticle } from '@/http/index'
const store = userInfoStore()
const searchId = ref<number|null>()
console.log(searchId.value);

type Res = {
    cate_name: string,
    cate_alias: string,
    state: boolean
}
const tabDate = reactive({
    table: []
})
const title = ref('增加文章分类')
const useCompontent = ref<any>();
const form = reactive({

})
const searchBtn = () => {
    // const {data} = await searchArticle(searchId.value)
    // console.log(data);
    // tabDate.table = data.data
    useCompontent.value.show()
}
const dialogVisible = ref(false)
const addArticle = () => {
    dialogVisible.value = true
}
const cancel = (res: Res) => {
    dialogVisible.value = res.state
}

// 添加文章
const Confirm = async (res: Res) => {
    dialogVisible.value = res.state
    await insertArticle({
        cate_name: res.cate_name,
        cate_alias: res.cate_alias
    })
    // 更新视图------->> 更新文章分类
    // 使用子组件的方法
    useCompontent.value.show()
    res.cate_name = ''
    res.cate_alias = ''
}
</script>
<style scoped>
.btn{
    width: 100px;
}
</style>
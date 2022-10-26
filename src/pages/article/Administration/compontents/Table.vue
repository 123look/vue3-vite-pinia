<template>
    <el-table border :data="tableData" style="width: 100%">
        <el-table-column v-for="item in columnHead" :label="item.name" :prop="item.prototype" :width="item.width">
        </el-table-column>
        <el-table-column label="操作">
            <template #default="scope">
                <el-button type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
  
<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue';
import { getArticleList } from '@/http/index'
interface User {
    date: string
    name: string
    address: string
}
onMounted(() => {
    show()
}) 
const show = async () => {
    const { data } = await getArticleList()
    console.log(data);
    
}

const handleDelete = (index: number, row: User) => {
    console.log(index, row)
}

const tableData: User[] = [
]

const columnHead = [
    {
        name: '文章id',
        prototype: 'id',
        width: 200
    },
    {
        name: '文章标题',
        prototype: 'title',
        width: 200
    },
    {
        name: '文章发布时间',
        prototype: 'pub_date',
        width: 200
    },
    {
        name: '文章状态',
        prototype: 'state',
        width: 200
    },
    {
        name: '文章分类名字',
        prototype: 'cate_name',
        width: 200
    },
]
</script>
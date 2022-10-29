<template>
    <el-table v-loading="loading" :border="tabStyles.border" :fit="tabStyles.fit" :data="tableData.taDate" style="width: 100%">
        <el-table-column v-for="(item, value) in tableColumnData" :key="item.name" :label="item.name"
            :prop="item.prototype" width="180">
        </el-table-column>
        <el-table-column label="操作" width="143">
            <template #default="scope">
                <el-button size="small" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <KeepAlive>
        <Dialog :isVisible=store.state :title=store.title @on-cancel="cancel" @on-confirm="Confirm"
            />
    </KeepAlive>
</template>
<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import Dialog from './Dialog.vue'
import { getArticleClass, deleteArticle, updateArticle, searchArticle } from '@/http/index'
import { userInfoStore } from '@/store/index'
const store = userInfoStore()
type tabData = {
    id: number,
    cate_name: string,
    cate_alias: string
}

type tabStyles = {
    border: boolean,
    fit: boolean
}
const prop = defineProps(['tabDate','searchId'])
const loading = ref(true)
console.log(prop.tabDate);


onMounted(() => {
    setTimeout(() => {
        show()
    }, 500)
})
// 更新文章分类
const show = async () => {
    if (prop.searchId) {
        const { data } = await searchArticle(prop.searchId)
        console.log(data);
        tableData.taDate = []
        tableData.taDate.push(data.data as never)
    } else {
        const { data } = await getArticleClass()
        tableData.taDate = data.data
        console.log(prop.searchId);
    }
    loading.value = false
    
    
}
// 父组件需要使用该方法 使用defineExpose暴露出去让父组件接受
defineExpose({
    show
})
const cancel = () => {
    store.state = false
}
const Confirm = async(res:any) => {
    store.state = false
    const { data } = await updateArticle(res)
    console.log(data);
    show()
}
// 修改文章分类
const handleEdit = async (index: number, row: tabData) => {
    console.log(index, row)
    store.state = true
    store.title = '修改文章分类'
    store.updateArticle = row
}
// 删除文章分类
const handleDelete = async (index: number, row: tabData) => {
    const { data } = await deleteArticle(row.id)
    console.log(data);
    show()
}

// 表格数据
let tableData = reactive({
    taDate: []
})

// 表格边框
const tabStyles = reactive<tabStyles>({
    border: true,
    fit: false
})
// 表头数据
const tableColumnData: Object = [
    {
        name: '文章分类id',
        prototype: 'id'
    },
    {
        name: '文章分类名称',
        prototype: 'cate_name'
    },
    {
        name: '文章分类别名',
        prototype: 'cate_alias'
    }
]
</script>
<style scoped>

</style>
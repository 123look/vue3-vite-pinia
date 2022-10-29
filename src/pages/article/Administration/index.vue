<template>
    <el-card>
        <el-form>
            <el-row>
                <el-col :span="1">
                    <el-form-item>
                        <el-button @click="add" class="btn" type="primary">新增</el-button>
                    </el-form-item>
                </el-col>
                <el-col :span="3">
                    <el-form-item>
                        <el-input />
                    </el-form-item>
                </el-col>
                <el-col :span="1">
                    <el-form-item>
                        <el-button type="primary">搜索</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <Table></Table>
        <Dialog :isVisible="dialogVisible" @on-cancel="cancel" @on-confirm="confirm"></Dialog>
    </el-card>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import Table from './compontents/Table.vue'
import Dialog from './compontents/Dialog.vue'
import { userInfoStore } from '@/store/index'
const dialogVisible = ref(false)
const add = () => {
    dialogVisible.value = true
}
const cancel = (res: boolean) => {
    dialogVisible.value = res
}

const confirm = (res: boolean) => {
    dialogVisible.value = res
}
</script>
<style scoped>
.btn{
    width: 100px;
}
</style>
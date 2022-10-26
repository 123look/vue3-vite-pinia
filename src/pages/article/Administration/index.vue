<template>
    <el-card>
        <el-form>
            <el-row>
                <el-col :span="1">
                    <el-form-item>
                        <el-button class="btn" type="primary">新增</el-button>
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
    </el-card>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import Table from './compontents/Table.vue'
</script>
<style scoped>
.btn{
    width: 100px;
}
</style>
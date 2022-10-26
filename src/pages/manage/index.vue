<template>
    <div class="common-layout">
        <el-container>
            <el-aside class="aside">
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                    text-color="#ffffff" active-text-color="#ffffff" background-color="#333333">
                    <el-menu-item index="0">
                        <el-icon>
                            <icon-menu />
                        </el-icon>
                        <router-link to="/manage/main">首页</router-link>
                    </el-menu-item>
                    <el-sub-menu index="1">
                        <template #title>
                            <el-icon>
                                <location />
                            </el-icon>
                            <span>系统设置</span>
                        </template>
                        <el-menu-item index="1-1">
                            <router-link to="/manage/user">用户管理</router-link>
                        </el-menu-item>
                        <el-menu-item index="1-2">
                            <router-link to="/manage/role">角色管理</router-link>
                        </el-menu-item>
                        <el-menu-item index="1-3">
                            <router-link to="/manage/dispose">配置管理</router-link>
                        </el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="2">
                        <template #title>
                            <el-icon>
                                <location />
                            </el-icon>
                            <span>文章设置</span>
                        </template>
                        <el-menu-item index="2-1">
                            <router-link to="/manage/classifi">文章分类</router-link>
                        </el-menu-item>
                        <el-menu-item index="2-2">
                            <router-link to="/manage/admin">文章管理</router-link>
                        </el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="3">
                        <template #title>
                            <el-icon>
                                <location />
                            </el-icon>
                            <span>图表查看</span>
                        </template>
                        <el-menu-item index="3-1">
                            <router-link to="/manage/standard">基本图表</router-link>
                        </el-menu-item>
                        <el-menu-item index="3-2">
                            <router-link to="/manage/big_screen">大屏</router-link>
                        </el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header class="head">
                    <el-row>
                        <el-col :span="20">
                            <h1>后台管理系统</h1>
                        </el-col>
                        <el-col :span="2">
                            <p class="p" @click="openUserInfo">欢迎{{userObj.username}}！</p>
                        </el-col>
                        <el-col :span="2">
                            <el-popconfirm 
                            @confirm="confirmEvent"
                            title="是否注销？">
                                <template #reference>
                                    <el-button class="btn">注销</el-button>
                                </template>
                            </el-popconfirm>
                        </el-col>
                        <Dialog v-model:obj="obj" @on-cancel="cancel" @on-confirm="confirm" :title="title"
                            :userObj="userObj"></Dialog>
                    </el-row>

                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>  
<script setup lang='ts'>
import { useRouter } from 'vue-router'
import { ref, reactive, onMounted } from 'vue'
import { isToken } from '../../utils/isToken'
import Dialog from './components/Dialog.vue'
import { getUserInfo } from '@/http/index'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
type DiaLog = {
    isVisible: boolean
}
const title = ref('修改个人信息')
const userObj = reactive({
    username: ''
})
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
// 点击确认
const confirmEvent = () => {
    window.localStorage.clear()
    setTimeout(() => {
        router.push('/')
    }, 500)
    
}


const router = useRouter()
const getUser = async () => {
    const { data } = await getUserInfo()
    userObj.username = data.data.username
}

onMounted(() => {
    getUser()
    isToken()
})
let obj = reactive<DiaLog>({
    isVisible: false
})

const openUserInfo = (): void => {
    obj.isVisible = true
}
const cancel = (res: boolean): void => {
    obj.isVisible = res
}
const confirm = (res: boolean): void => {
    obj.isVisible = res
}

</script>
<style scoped lang="less">
.aside {
    width: 200px;
    height: 100vh;
    background-color: #333333;
}

.p {
    line-height: 6;
    margin: 0;
    cursor: pointer;
}

.head {
    width: 89.6vw;
    background-color: #ffffff;
    height: 100px;
    box-shadow: 0 0 8px #808080;

    h1 {
        color: rgb(0, 0, 0);
        font-size: 30px;
        margin-bottom: 0;
    }
}

::v-deep .el-menu {
    border: none;
}

::v-deep .router-link-active {
    text-decoration: none;
    color: white;
}

a {
    text-decoration: none;
    color: white;
}

.btn {
    margin-top: 30px;
}
</style>

//导入axios
import axios from 'axios'
const api: string = 'http://big-event-vue-api-t.itheima.net'
const server = axios.create({
	baseURL: api  //请求后端数据的基本地址，自定义
})
const token = window.localStorage.getItem('token')
server.interceptors.request.use((config) => {
    if(token) {
        config.headers.Authorization = token
    }
    return config
},(error)=>{
    return Promise.reject(error)
})
type RegInfo = {
    username: string
    password: string 
}
type UserInfo = {
    id: number,
    username: string,
    nickname: string,
    email: string,
    user_pic: string
}
type Article = {
    cate_name: string,
    cate_alias: string
}
// 文章管理
type ArticleClass = {
    pagenum: number|string,
    pagesize: number|string,
    cate_id: number|string,
    state: number|string
}
// add参数
type addArtList = {
    title: string,
    cate_id: string | number,
    content: string,
    cover_img: string,
    state: string | boolean
}
// 注册
export const register = (data: RegInfo) => {
    console.log(data);
    
    return server({
        method: 'post',
        url: '/api/reg',
        data:data
    })
}
// 登录
export const Login = (data: RegInfo) => {
    return server({
        method: 'post',
        url: '/api/login',
        data
    })
}
// 获取用户信息
export const getUserInfo = () => {
    return server({
        method: 'get',
        url: '/my/userinfo'
    })
}
// 更新头像
export const uploadImg = (data:any) => {
    console.log(data);
    return server({
        method: 'patch',
        url: '/my/update/avatar',
        data:{
            avatar:data
        }
    })
}
// 修改个人信息
export const updateUserInfo = (data:UserInfo) => {
    return server({
        method: 'put',
        url: '/my/userinfo',
        data
    })
}
// 获取文章分类
export const getArticleClass = () => {
    return server({
        method: 'get',
        url: '/my/cate/list'
    })
}
// 增加文章分类
export const insertArticle = (data: Article) => {
    return server({
        method: 'post',
        url: '/my/cate/add',
        data
    })
}
// 删除分类
export const deleteArticle = (id: number) => {
    console.log(id);
    return server({
        method: 'DELETE',
        url: `/my/cate/del?id=${id}`
    })
}
// 修改分类
export const updateArticle = (data: Article) => {
    return server({
        method: 'put',
        url: '/my/cate/info',
        data
    })
}
// 搜索分类
export const searchArticle = (id: number) => {
    return server({
        method: 'get',
        url: `/my/cate/info?id=${id}`,
    })
}
// 获取文章列表
export const getArticleList = () => {
    return server({
        method: 'get',
        url: `/my/article/list?pagenum=1&pagesize=10`,
    })
}
// 发布文章
export const addArticleList = (data: addArtList) => {
    return server({
        method: 'post',
        url: '/my/article/add',
        data
    })
}
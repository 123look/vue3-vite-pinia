import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
export const isToken = () => {
    const router = useRouter()
    let token:any = window.localStorage.getItem('token')
    if(!token) {
        token = window.localStorage.clear()
        ElMessage({
            message: 'token不存在或已过期!',
            type: 'error',
        })
        router.push('/')
    }
}
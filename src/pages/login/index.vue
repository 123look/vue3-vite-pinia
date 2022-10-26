<template>
    <div class="box">
        <el-card class="box-card">
            <h1>Login</h1>
            <div class="reg_username">
                <input v-model="username" type="text" placeholder="username">
            </div>
            <div class="reg_pwd">
                <input v-model="password" type="password" placeholder="password">
            </div>
            <div class="reg_button">
                <button @click="login">Login</button>
            </div>
            <div class="reg_jump">
                <p>Don't have account?<span @click="goLogin">Sign up</span></p>
            </div>
        </el-card>
    </div>

</template>
<script setup lang='ts'>
import { ElMessage } from 'element-plus'
import { Login } from '../../http/index'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
const username = ref('luojie123')
const password = ref('123123')
const login = async () => {
    const RegExp: RegExp = /^[a-zA-Z0-9_-]{4,16}$/
    console.log(RegExp.test(username.value), username.value);

    if (!username.value) {
        ElMessage({
            message: '用户名必填！！！',
            type: 'error',
        });
    } else if (!RegExp.test(username.value)) {
        ElMessage({
            message: '用户名为6-10位字母或数字!!!',
            type: 'error',
        });
    } else if (!password.value) {
        ElMessage({
            message: '密码必填！！！',
            type: 'error',
        });
    } else if (!RegExp.test(password.value)) {
        ElMessage({
            message: '密码为6-10位字母或数字!!!',
            type: 'error',
        });
    } else {
        const body = {
            username: username.value,
            password: password.value
        }
        const { data } = await Login(body)
        console.log(data);

        if (data) {
            window.localStorage.setItem("token", data.token)
            ElMessage({
                message: '登录成功！',
                type: 'success',
            })
            setTimeout(() => {
                router.push('/manage')
            })
        }
    }

}
const router = useRouter()
const goLogin = () => {
    router.push('/reg')
}
</script>
<style scoped lang="less">
.box {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);

    .box-card {
        width: 600px;
        height: 500px;

        h1 {
            text-align: center;
        }

        .reg_username {
            display: flex;
            justify-content: center;
            margin-top: 20px;

            input {
                width: 500px;
                height: 40px;
                outline: 0;
                border-top: 0;
                border-left: 0;
                border-right: 0;
                border-bottom: 1px solid rgb(189, 189, 189);
                font-size: 20px;
                color: rgb(189, 189, 189);
            }
        }

        .reg_pwd {
            display: flex;
            margin-top: 50px;
            justify-content: center;

            input {
                width: 500px;
                height: 40px;
                outline: 0;
                border-top: 0;
                border-left: 0;
                border-bottom: 1px solid rgb(189, 189, 189);
                font-size: 20px;
                border-right: 0;
                color: rgb(189, 189, 189);
            }
        }

        .reg_button {
            display: flex;
            margin-top: 40px;
            justify-content: center;

            button {
                cursor: pointer;
                width: 500px;
                height: 60px;
                border-radius: 20px;
                border: 0;
                font-size: 20px;
                color: white;
                background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
            }
        }

        .reg_jump {
            p {
                text-align: center;
                font-size: 18px;
                font-weight: bold;

                span {
                    text-decoration: none;
                    color: #a6c1ee;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
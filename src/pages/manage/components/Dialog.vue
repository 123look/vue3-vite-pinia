<template>
  <el-dialog width="500px" align-center :model-value="obj.isVisible" :title="title">
    <el-form
    label-position="left"
    label-width="55px"
    >
      <el-form-item label="头像">
        <!-- :http-request="uploadFile" 是必要的 如果不存在会有跨域问题 -->
        <el-upload class="avatar-uploader" :action="url" :show-file-list="false" :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload" :http-request="uploadFile">
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon">
            <Plus />
          </el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input :clearable="clearable" v-model="form.username" />
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input :clearable="clearable" v-model="form.email" />
      </el-form-item>
      <el-form-item label="昵称">
        <el-input :clearable="clearable" v-model="form.nickname" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="Cancel">取消</el-button>
        <el-button type="primary" @click="Confirm">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup lang='ts'>
import { ElMessage } from 'element-plus'
import { ref, reactive, onMounted } from 'vue'
import type { UploadProps } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import { uploadImg, getUserInfo, updateUserInfo } from '@/http/index'

type userInfo = {
  id: number|undefined,
  username: string,
  user_pic: string,
  nickname: string,
  email: string
}

defineProps(['obj', 'title'])
const clearable = ref<boolean>(true)
const emit = defineEmits(['on-cancel', 'on-confirm'])
const Cancel = () => {
  UserInfo()
  emit('on-cancel', false)
}
const Confirm = async() => {
  updateUser()
  emit('on-confirm', false)
}
let form = reactive<userInfo>({
  id: undefined,
  username: '',
  user_pic: '',
  email: '',
  nickname: ''
})
onMounted(async() => {
  UserInfo()
})
// 获取用户信息
const UserInfo = async() => {
  const {data} = await getUserInfo()
  imageUrl.value = data.data.user_pic
  form.id = data.data.id
  form.user_pic = data.data.user_pic
  form.username = data.data.username
  form.email = data.data.email
  form.nickname = data.data.nickname
}
// 修改用户信息
const updateUser = async() => {
  await updateUserInfo(form)
}
let imageUrl = ref<string>('')

const url = ref('http://big-event-vue-api-t.itheima.net/my/update/avatar')

const uploadFile = async () => {
  // const {data} = await uploadImg(baseUrl.value) 
  // console.log(data);
}
const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
  let reader = new FileReader();
  let baseUrl = reactive<any>({
    avatar: ''
  })
  // 将对象uploadFile.raw传入
  reader.readAsDataURL(uploadFile.raw as any);
  // 将图片转成base64编码格式
  reader.onload = async () => {
    baseUrl.avatar = reader.result
     await uploadImg(baseUrl.avatar)
  };
}
// 上传图片必须是jpeg格式并且不能超过2mb
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('图片必须是jpg!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('图片大小不能超过2MB!')
    return false
  }
  return true
}
</script>
<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
<template>
    <el-dialog
    :model-value="isVisible"
    title="发布文章"
    width="30%"
    :before-close="handleClose"
  >
    <el-form>
      <el-form-item label="封面">
      </el-form-item>
      <el-form-item label="文章标题">
        <el-input v-model="article.title" />
      </el-form-item>
      <el-form-item label="示例内容">
        <el-input v-model="article.content" />
      </el-form-item>
      <el-form-item label="文章状态">
        <el-select v-model="article.value">
          <el-option value="yfb" label="已发布"></el-option>
          <el-option value="cg" label="草稿"></el-option>
        </el-select>
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">Cancel</el-button>
        <el-button type="primary" @click="confirm">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { ElMessageBox } from 'element-plus'
import { userInfoStore } from '@/store/index'
let article = reactive({
  value: '',
  title: '',
  content: ''
})
defineProps(['isVisible'])
const emit = defineEmits(['on-cancel', 'on-confirm'])
const cancel = () => {
  emit('on-cancel', false)
  article.value = ''
  article.title = ''
  article.content = ''
}

const confirm = () => {
  emit('on-confirm', false)
  article.value = ''
  article.title = ''
  article.content = ''
}

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
</script>
<style scoped>
</style>
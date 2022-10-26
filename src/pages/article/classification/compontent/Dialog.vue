<template>
  <el-dialog :model-value="isVisible" :title="title" width="30%" :before-close="handleClose" @open="handleOpen">
    <el-form label-position="left" label-width="70px">
      <el-form-item v-if="title == '修改文章分类'" label="分类id">
        <el-input :disabled="disabled" v-model="article.id" />
      </el-form-item>
      <el-form-item label="分类名称">
        <el-input v-model="article.cate_name" :clearable="clearable" />
      </el-form-item>
      <el-form-item label="分类别名">
        <el-input v-model="article.cate_alias" :clearable="clearable" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="Cancel">取消</el-button>
        <el-button type="primary" @click="Confirm">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { ElMessageBox } from 'element-plus'
import { userInfoStore } from '@/store/index'
const store = userInfoStore()
const disabled = ref<boolean>(true)
const clearable = ref<boolean>(true)
type articleForm = {
  id: number,
  cate_name: string,
  cate_alias: string,
  state: boolean
}
const prop = defineProps(['isVisible', 'title'])

const emit = defineEmits(['on-cancel', 'on-confirm'])
const article: articleForm = reactive({
  id: 0,
  cate_name: '',
  cate_alias: '',
  state: false
})
const handleOpen = () => {
  console.log(store.updateArticle.id);
  if (prop.title == '修改文章分类') {
    article.id = store.updateArticle.id
    article.cate_name = store.updateArticle.cate_name
    article.cate_alias = store.updateArticle.cate_alias
  }
}
const Cancel = () => {
  emit('on-cancel', article)
}
const Confirm = () => {
  emit('on-confirm', article)
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
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
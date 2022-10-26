<template>
    用户管理
</template>
<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import { isToken } from 'utils/isToken'
onMounted(() => {
    isToken()
})
</script>
<style scoped>
</style>
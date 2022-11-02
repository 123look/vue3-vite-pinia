<template>
    <quark-button type="primary">默认按钮</quark-button>
    <quark-marquee :title="title" speed="200"></quark-marquee>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import 'quarkd/lib/button';
import "quarkd/lib/marquee";
const title = ref('1231231231231231231231232123123132132122312321')
</script>
<style scoped>
</style>
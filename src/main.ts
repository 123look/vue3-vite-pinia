import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import {createPinia} from 'pinia'
import router from './router'
import "element-plus/dist/index.css";
import "./style/index.css"

const store = createPinia()

createApp(App).use(router).use(ElementPlus).use(store).mount('#app')

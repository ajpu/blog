import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import VueRouter from "vue-router"
import 'element-plus/dist/index.css'

createApp(App).use(VueRouter).use(ElementPlus).mount('#app')

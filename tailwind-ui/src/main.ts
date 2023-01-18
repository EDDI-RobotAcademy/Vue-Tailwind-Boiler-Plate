import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import MainLayout from '@/components/layouts/MainLayout.vue'

import './styles/index.scss'

const app = createApp(App)

app.component('MainLayout', MainLayout)

app.use(createPinia())
app.use(router)

app.mount('#app')

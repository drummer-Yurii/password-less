import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

const vm = createApp(App).use(VueToast).mount('#app')

export default vm

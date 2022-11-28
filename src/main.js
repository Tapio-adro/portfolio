import { createApp } from 'vue'
import App from './App.vue'

import './assets/style.css'
import './assets/styles_reset.css'
import './assets/font-awesome-4.7.0/css/font-awesome.min.css'

import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

createApp(App).use(autoAnimatePlugin).mount('#app')

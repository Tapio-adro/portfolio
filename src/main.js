import { createApp } from 'vue'
import App from './App.vue'

import './assets/style/style.css'
import './assets/style/styles_reset.css'
import './assets/font-awesome/css/font-awesome.min.css'

import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

createApp(App).use(autoAnimatePlugin).mount('#app')

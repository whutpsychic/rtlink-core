import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/global.scss'
import './styles/normal.scss'
import './styles/night.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import 'highlight.js/styles/stackoverflow-light.css'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage('javascript', javascript);

const app = createApp(App)

app.use(router)
app.use(store)
app.use(ElementPlus)
app.use(hljsVuePlugin)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')

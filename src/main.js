/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import VueScrollTo from "vue-scrollto";

/* Vue.use(VueScrollTo, {
  duration: 1000, //早すぎないように遅くする
  offset: -60, //オフセットで遷移先の要素がヘッダーに隠れるのを対策
  easing: "ease-out", //ease-outが直感的かと思い採用
}); */



const app = createApp(App)

app.use(VueScrollTo);

registerPlugins(app)

app.mount('#app')

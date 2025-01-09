import './assets/main.css'
import * as FaIcons from "oh-vue-icons/icons/fa";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import router from './router';

const Fa = Object.values({ ...FaIcons });

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { useThemeStore } from './store/ThemeStore';

const pinia = createPinia()
const app = createApp(App);

addIcons(...Fa);
app.component("v-icon", OhVueIcon);
app.use(router);

app.use(pinia)
app.mount('#app')

const themeStore = useThemeStore();
document.documentElement.setAttribute('data-theme', themeStore.theme)


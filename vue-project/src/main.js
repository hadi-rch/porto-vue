import './assets/main.css'
import * as FaIcons from "oh-vue-icons/icons/fa";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import router from './router';

const Fa = Object.values({ ...FaIcons });

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

addIcons(...Fa);
app.component("v-icon", OhVueIcon);
app.use(router);

app.mount('#app')

import './bootstrap';
import { createApp } from "vue";
import App from "./App.vue";
import router from "../js/router/index.js";

import '../../public/assets/css/style.css';
import AlertPlugin from '../js/plugins/alertPlugin.js';


const app = createApp(App);

app.use(AlertPlugin);
app.use(router);
app.mount("#app");
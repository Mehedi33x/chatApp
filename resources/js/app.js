import './bootstrap';
import { createApp } from "vue";
import App from "./App.vue";
import '../../public/assets/css/style.css';
import router from "../js/router/index.js";
import axios from "axios";

const app = createApp(App);

app.use(router);
app.mount("#app");
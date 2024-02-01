import { createApp } from "vue";
import App from "./App.vue";
import myUI from "@uiproject/components";
const app = createApp(App);
app.use(myUI);
app.mount("#app");

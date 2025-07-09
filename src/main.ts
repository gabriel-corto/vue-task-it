import { createApp } from "vue"
import { pinia } from "@/libs/pinia"

import App from "./app.vue"
import "./style.css"

const app = createApp(App)

app.use(pinia)
app.mount("#app")

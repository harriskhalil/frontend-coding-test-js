import { createApp } from 'vue'
import './styles/main.css'
import App from './App.vue'
import initializeRouter from './router'
import { provideAppToast } from "./toastPlugin";

const app = createApp(App)
const toastOptions = {
  // Set your default options here
};
initializeRouter(app)
app.use(provideAppToast, toastOptions)

app.mount('#app')

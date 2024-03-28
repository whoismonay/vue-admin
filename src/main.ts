import App from './App.vue'
import { setupRouter } from './router'

import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'
import 'animate.css'

const app = createApp(App)

setupRouter(app)

app.use(createPinia())

app.mount('#app')

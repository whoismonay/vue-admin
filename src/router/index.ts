import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'

export const router = createRouter({
  history: createWebHistory()
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}

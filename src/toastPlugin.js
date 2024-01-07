import {
  createToastInterface,
  EventBus,
  toastInjectionKey,
} from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const globalEventBus = new EventBus()

function createGlobalToast(options) {
  return createToastInterface({ ...options, eventBus: globalEventBus })
}

export function provideAppToast(app, options = {}) {
  const toast = createGlobalToast(options)
  app.provide(toastInjectionKey, toast)
  app.config.globalProperties.$toast = toast
}

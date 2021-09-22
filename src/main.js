import { createApp } from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store/store.js'
import router from './router/router.js'

createApp(App)
  .use(Vuex)
  .use(store)
  .use(router)
  .mount('#app')

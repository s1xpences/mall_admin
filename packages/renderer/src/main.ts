import { createApp } from 'vue'
import App from './App.vue'
import { setupProdMockServer } from '../../mock';
import "@/assets/css/base.less";
import { createPinia } from 'pinia'
import router from './router'

// if (process.env.NODE_ENV === 'production') {
setupProdMockServer();
// }

createApp(App)
  .use(createPinia)
  .use(router)
  .mount('#app')
  .$nextTick(window.removeLoading)

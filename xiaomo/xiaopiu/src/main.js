import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import "swiper/dist/css/swiper.min.css"
// 全局注册
import Header from "@/components/header.vue"
import Swiper from "@/components/swiper.vue"
Vue.component("Header",Header)
Vue.component("Swiper",Swiper)
Vue.config.productionTip = false
Vue.prototype.$http=axios;
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

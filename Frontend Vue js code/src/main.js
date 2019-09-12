import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Routes from './routes/routes'
import Notifications from 'vue-notification'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.prototype.$http = axios;
Vue.use(Notifications)
Vue.config.productionTip = false

const router = new VueRouter({
	routes:Routes
})

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')


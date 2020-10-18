import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'chart.js'
import 'hchs-vue-charts'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(window.VueCharts)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

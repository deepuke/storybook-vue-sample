import Vue from 'vue'
import App from './App.vue'
import HighchartsVue from 'highcharts-vue'
import i18n from './i18n'


Vue.use(HighchartsVue)
Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')

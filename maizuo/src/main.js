// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'//根组件
import router from './router'
Vue.config.productionTip = false

////iview
//import iView from 'iview';
//import 'iview/dist/styles/iview.css';
//Vue.use(iView)
//
////element-ui
//import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-chalk/index.css'
//Vue.use(ElementUI)

//mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//filters
import './modules/filters'
//directives
import './modules/directives'

//swiper
import '../node_modules/swiper/dist/css/swiper.min.css'


import store from './vuex/store'
/* eslint-disable no-new */
// 根实例 
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

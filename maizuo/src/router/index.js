
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import AppMain from '../components/main/AppMain.vue'
import AppFilm from '../components/film/AppFilm.vue'
import AppGoodList from '../components/good-list/AppGoodList.vue'
import AppGoodCar from '../components/good-car/AppGoodCar.vue'
import AppPosition from '../components/position/AppPosition.vue'

const routes = [
  
  {path:'',redirect:'/main'},
  {path:'/main',name:'main',component:AppMain},
  {path:'/film',name:'film',component:AppFilm},
  {path:'/AppGoodList',name:'good-list',component:AppGoodList},
  {path:'/AppGoodCar',name:'good-car',component:AppGoodCar},
  {path:'/position',name:'position',component:AppPosition},
  {path:'**',redirect: '/main'}
  
]

const router = new Router({
  routes,
})

import store from '../vuex/store'
router.beforeEach(function(to,from,next){
	
	let {name} = to
	let title = ''
	
	switch(name){
		case 'position':title='选择地址';break;
		default :title = '卖座电影';break;
	}
	store.commit('changeTitle',title)
	next()
})

export default router
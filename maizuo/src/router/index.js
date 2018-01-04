
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import AppMain from '../components/main/AppMain.vue'
import AppFilm from '../components/film/AppFilm.vue'
import AppGoodList from '../components/good-list/AppGoodList.vue'
import AppGoodCar from '../components/good-car/AppGoodCar.vue'
import AppPosition from '../components/position/AppPosition.vue'
import AppMine from '../components/mine/AppMine.vue'
import AppLogin from '../components/mine/AppLogin.vue'
import AppPersonal from '../components/mine/AppPersonal.vue'
import store from '../vuex/store'
const routes = [
  
  {path:'',redirect:'/main'},
  {path:'/main',name:'main',component:AppMain},
  {path:'/film',name:'film',component:AppFilm},
  {path:'/AppGoodList',name:'good-list',component:AppGoodList},
  {path:'/AppGoodCar',name:'good-car',component:AppGoodCar},
  {path:'/position',name:'position',component:AppPosition},
  {
  	path:'/mine',name:'mine',component:AppMine,children:[
  		{path:'',redirect:to=>{ 			
  			//判断是否登陆
  		
  			if(!localStorage.user_info){
  			
  				return {name:'login'}
  			}else{
  			
  				//vuex里的同步
  				store.commit("changeUserInfo",JSON.parse(localStorage.user_info))
  				return {name:'personal'}
  			}
  			
  		}},  		
  		{path:'login',name:'login',component:AppLogin},
  		{path:'personal',name:'personal',component:AppPersonal}
  	]
  	
  },
  {path:'**',redirect: '/main'}
  
]

const router = new Router({
  routes,
})


router.beforeEach(function(to,from,next){
	
	let {name} = to
	let title = ''
	
	switch(name){
		case 'position':title='选择地址';break;
		case 'login':title='登陆';break;
		case 'personal':title='我的';break;
		default :title = '卖座电影';break;
	}
	store.commit('changeTitle',title)
	next()
})

export default router
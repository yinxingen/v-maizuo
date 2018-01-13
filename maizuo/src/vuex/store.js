

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import state from './modules/state'
import getters from './modules/getters'
import mutations from './modules/mutations'
import actions from './modules/actions'

//const state = {
//  car:[],
//  city:'',
//  global_title:'卖座电影'
//}

//const getters = {
//  money(state){
//      let money = 0
//      state.car.forEach(item => {
//          if(item.isSelected){
//              money+=(item.price*item.num)
//          }
//          
//      });
//      return money
//  }
//}
//
//
//const mutations = {
//  initCar(state,car){
//      state.car = car
//
//  },
//  addGood(state,{id,title,price}){
//      let isHas = state.car.some(item=>{
//          if(item.id==id){ 
//              item.num++
//              return true;
//          }else{return false;}
//      })
//      if(!isHas){
//          state.car.push({id,title,price,num:1,isSelected:true})
//      }
//      //为了与数据库里的car对应
//      localStorage.car = JSON.stringify(state.car)
//  },
//  reduceGood(state,{id}){
//      let len = state.car.length
//      for (let i = 0; i < len; i++) {
//          if(state.car[i].id==id){
//              state.car[i].num--
//              if(state.car[i].num==0){
//                  state.car.splice(i,1)
//              }
//              break;
//          }
//      }
//      localStorage.car = JSON.stringify(state.car)
//  },
//  removeGood(state,id){
//      let len = state.car.length
//      for (let i = 0; i < len; i++) {
//          if(state.car[i].id==id){
//             state.car.splice(i,1)
//              break;
//          }
//      }
//      localStorage.car = JSON.stringify(state.car)
//  },
//  seleteGood(state,val){
//      state.car.forEach(item=>item.isSelected = val)
//  },
//  getPosition(state,city){
//  	
//  	state.city = city
//  },
//  changeTitle(state,title){
//  	state.global_title = title
//  }
//}
//import getPosition from '../modules/getPosition'
//const actions = {
//	getPosition({commit}){
//		console.log(getPosition)
//		getPosition((city)=>{
//			commit('getPosition',city)
//		})
//		
//	},
//  addGood({commit},params){
//     setTimeout(() => {
//          let result = 'ok'   
//          if(result=='ok'){
//              commit('addGood',params)
//          }
//     }, 300);
//  },
//  initCar({commit}){
//      setTimeout(() => {
//         let results = JSON.parse(localStorage.car||'[]')
//         commit('initCar',results)
//      }, 300);
//  },
//  reduceGood({commit},params){
//      setTimeout(() => {
//          let result = 'ok'   
//          if(result=='ok'){
//              commit('reduceGood',params)
//          }
//      }, 300);
//  },
//  removeGood({commit},id){
//      setTimeout(() => {
//          let result = 'ok'   
//          if(result=='ok'){
//              commit('removeGood',id)
//          }
//      }, 300);
//  },
//  seleteGood({commit},val){
//      setTimeout(() => {
//          let result = 'ok'   
//          if(result=='ok'){
//              commit('seleteGood',val)
//          }
//      }, 300);
//  }
//}

const store = new Vuex.Store({
    state,getters,mutations,actions
})

export default store